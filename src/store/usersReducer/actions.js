import { usersAPI } from 'api/api'
import { SET_USERS, SET_LOADINGFLAG, SWITCH_PAGE } from './type'

const setUsers = (users) => ({ type: SET_USERS, users })
const setIsLoading = (isLoading) => ({ type: SET_LOADINGFLAG, isLoading })

export const setPageNumber = (pageNumber) => ({ type: SWITCH_PAGE, pageNumber })

export const fetchSetUsers = (pageNumber) => async (dispatch) => {
    dispatch(setIsLoading(true))
    const users = await usersAPI.getUsers(pageNumber)
    dispatch(setUsers(users))
    dispatch(setIsLoading(false))
}

