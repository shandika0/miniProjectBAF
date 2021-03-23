import * as userAction from '../action/user'
import {getUser} from '../request/user'
import {call, all, put, takeLatest} from 'redux-saga/effects'

export function* getUsers(){
    try {
        const response = yield call(getUser)
        const data = response.data
        yield put({
          type:userAction.GET_USERS_SUCCESS,
          data  
        })
    } catch (error) {
        yield put({
            type:userAction.GET_USERS_FAILED
          })
    }
}
export default all([
    takeLatest(userAction.GET_USERS_REQUEST, getUsers)
])
