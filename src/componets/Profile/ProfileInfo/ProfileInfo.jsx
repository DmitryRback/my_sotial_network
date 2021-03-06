import React, {useEffect, useState} from 'react';
import pr from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import avatar from './../../../assets/img/user.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import cover from './../../../assets/img/background.jpg';
import {NavLink} from "react-router-dom";
import {mdiDownload} from '@mdi/js';
import Icon from "@mdi/react";
import ProfileDataForm from "./profileDataForm/profileDataForm";
import {ProfileData} from "./profileData/profileData";
import Button from "../../Button/Button1";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
            setEditMode(false)
            props.updateProfileStatus(false)
        },
        [props.updateProfile]
    )

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData)
    }

    return (
        <div>
            <div className={pr.cover}>
                <img
                    src={cover}/>
            </div>
            <div className={pr.container}>
                <div className={pr.profileDescription}>
                    <div className={pr.avatarBlock}>
                        {!editMode && <Button text={'Edit profile'} onClick={() => setEditMode(true)}/>}
                        <div className={pr.avatar}>
                            <img src={!props.profile.photos.large ? avatar : props.profile.photos.large}/>
                            {props.isOwner &&
                            <div className={pr.downloadImg}>
                                <div className={pr.visability}>
                                    <label>
                                        <input type={"file"} onChange={onMainPhotoSelected} className={pr.inputFile}/>
                                        <Icon path={mdiDownload} color={'white'} size={'32px'}/>
                                    </label>
                                </div>

                            </div>}
                        </div>
                    </div>
                    <div className={pr.description}>
                        <h2>{props.profile.fullName}</h2>
                        {!props.isAuth && <div>
                            <NavLink to={'/login'} className={pr.login_btn}>
                                <p>Login</p>
                            </NavLink>
                        </div>}
                        <div className={pr.status}>
                            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
                        </div>
                    </div>

                </div>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit}
                                       exitForEditMode={() => setEditMode(false)}
                                       profile={props.profile}/>
                    : <ProfileData profile={props.profile}/>}
            </div>

        </div>
    )
}


export default ProfileInfo;

