import { SET_USERS, SET_LOADINGFLAG, SWITCH_PAGE } from './type'

const initialState = {
    users: [],
    isLoadingUsers: false,
    currentPage: 1,
    totalUsers: 1,
    portionUsers: 9,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: [...action.users.items],
                totalUsers: action.users.total_count
            }

        case SET_LOADINGFLAG:
            return {
                ...state,
                isLoadingUsers: action.isLoading
            }

        case SWITCH_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }

        default:
            return state;
    }
}

export default usersReducer