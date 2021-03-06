import {ProfileAPI, UsersAPI} from "../API/API";
import {Redirect} from "react-router-dom";
import React from "react";
import {stopSubmit} from "redux-form";

const ADD_POST = 'PROFILE/ADD-POST';
const SET_USERS_PROFILE = 'PROFILE/SET_USERS_PROFILE';
const SET_PROFILE_USERS_DATA = 'PROFILE/SET_PROFILE_USERS_DATA';
const SET_STATUS = 'PROFILE/SET_STATUS';
const DELETE_POST = 'PROFILE/DELETE_POST';
const SAVE_PHOTO_SUCCES = 'PROFILE/SAVE_PHOTO_SUCCES';
const UPDATE_PROFILE = 'PROFILE/UPDATE_PROFILE';


let initialState = {
    posts: [
        {
            message: 'Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?',
            id: 1,
            likesCount: 15
        },
        {message: 'It\'s my first post', id: 2, likesCount: 20},
        {message: 'Hello ', id: 3, likesCount: 15},
        {message: 'post', id: 4, likesCount: 0},
    ],
    profile: null,
    status: null,
    updateProfile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 5, message: action.postMessage, likesCount: 0,}, ...state.posts],
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_PROFILE_USERS_DATA:
            return {
                ...state,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case SAVE_PHOTO_SUCCES:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                updateProfile: action.updateProfileStatus
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (postMessage) => ({
    type: ADD_POST, postMessage
});

export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE, profile
})

export const setStatus = (status) => ({
    type: SET_STATUS, status
})
export const deletePost = (id) => ({
    type: DELETE_POST, id
})
export const savePhotoSucces = (photos) => ({
    type: SAVE_PHOTO_SUCCES, photos
})
export const updateProfileStatus = (updateProfileStatus) => ({
    type: UPDATE_PROFILE, updateProfileStatus
})

export const getProfile = (userId) => async (dispatch) => {
    let responce = await UsersAPI.getProfile(userId)
    dispatch(setUsersProfile(responce.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let responce = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(responce.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let responce = await ProfileAPI.updateStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (photo) => async (dispatch) => {
    let responce = await ProfileAPI.savePhoto(photo)
    if (responce.data.resultCode === 0) {
        dispatch(savePhotoSucces(responce.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId
    let responce = await ProfileAPI.saveProfile(profile)
    if (responce.data.resultCode === 0) {
        dispatch(getProfile(userId))
        dispatch(updateProfileStatus(true))
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'common error'
        const socialNetwork = message.slice(
            responce.data.messages[0].indexOf(">") + 1,
            responce.data.messages[0].indexOf(")")
        ).toLowerCase();
        dispatch(stopSubmit('editProfile', {contacts: {[socialNetwork]: message}}))
        // return Promise.reject(responce.data.messages[0]);
        dispatch(updateProfileStatus(false))
    }
}
export default profileReducer;