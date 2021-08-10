import Flex from 'components/common/Flex'
import Preloader from 'components/common/Preloader'
import User from 'components/user'
import Pagination from 'components/user/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSetUsers, setPageNumber } from 'store/usersReducer/actions'
import { getCurrentPage, getLoadingFlag, getPortionUsers, getTotalUsers, getUsers } from 'store/usersReducer/selectors'

const UserPageContainer = () => {
    const dispatch = useDispatch()

    const users = useSelector(getUsers)
    const loadingFlag = useSelector(getLoadingFlag)
    const currentPage = useSelector(getCurrentPage)
    const totalUsers = useSelector(getTotalUsers)
    const portionUsers = useSelector(getPortionUsers)

    useEffect(() => {
        dispatch(fetchSetUsers(currentPage))
    }, [dispatch, currentPage])

    const onSwitchPage = (pageNumber) => {
        dispatch(setPageNumber(pageNumber))
    }

    if (loadingFlag) {
        return <Preloader />
    }

    return (
        <Flex wrap="wrap" justify="flex-start">
            <User users={users} />
            <Pagination
                onSwitchPage={onSwitchPage}
                currentPage={currentPage}
                totalUsers={totalUsers}
                portionUsers={portionUsers} />
        </Flex>
    )
}

export default UserPageContainer


