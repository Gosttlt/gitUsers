export const getUsers = state => state.usersReducer.users
export const getLoadingFlag = state => state.usersReducer.isLoadingUsers
export const getCurrentPage = state => state.usersReducer.currentPage
export const getTotalUsers = state => state.usersReducer.totalUsers
export const getPortionUsers = state => state.usersReducer.portionUsers

