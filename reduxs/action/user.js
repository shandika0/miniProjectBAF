import {defaultActionCreator} from './actionCreator'

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const getUsersRequest = defaultActionCreator(GET_USERS_REQUEST, 'data');
export const getUsersSuccess = defaultActionCreator(GET_USERS_SUCCESS, 'data');
export const getUsersFailed = defaultActionCreator(GET_USERS_FAILED, 'error');