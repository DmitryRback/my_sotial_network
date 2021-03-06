import React from "react";
import hd from './LoginBlock.module.css'
import {LoginBtn} from "../LoginBtn/LoginBtn";
import person from "../../../assets/img/baseline_person_outline_white_18dp.png";
import {NavLink} from "react-router-dom";
import avatar from './../../../assets/img/user.jpg'


export const LoginBlock = (props) => {
    return (
        <div className={hd.login_block}>
            {props.isAuth ? <div className={hd.login}>
                    <button className={hd.exit} onClick={props.LogoutThunk}>Exit</button>
                    <NavLink to={'/profile'}>
                        <img src={!props.profile ? avatar
                            : (!props.profile.photos.small ? avatar : props.profile.photos.small)}/>
                    </NavLink>
                </div>
                : <LoginBtn person={person}/>
            }
        </div>
    )
}