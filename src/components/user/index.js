import Flex from 'components/shared/Flex'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersPortion, getUser, getLoadingFlagModal } from 'store/usersReducer/selectors'
import Ava from './Ava'
import UserInfo from './UserInfo'
import Modal from 'components/shared/Modal'
import { useState } from 'react'
import { fetchSetUser } from 'store/usersReducer/actions'
import { useCallback } from 'react'
import Preloader from 'components/shared/Preloader'
import Button from 'components/shared/Button'


const User = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setModalOpen] = useState(false)
    const user = useSelector(getUser)
    const users = useSelector(getUsersPortion)
    const isLoading = useSelector(getLoadingFlagModal)

    const fetchUser = useCallback((userName) => {
        dispatch(fetchSetUser(userName))
        setModalOpen(true)
    }, [dispatch])

    const onCloseModal = () => {
        setModalOpen(false)
    }

    const usersArr = useMemo(() => users.map(u => (
        <Flex
            onClick={() => fetchUser(u.login)}
            key={u.id}
            border="1px solid #000"
            align="center"
            margin="10px"
            padding="20px"
            bgH="#ececec"
            width="25%">
            <Ava alt="" src={u.avatar_url} />
            <UserInfo>
                <div>{u.login}</div>
            </UserInfo>
        </Flex>
    )), [users, fetchUser])

    return (
        <>
            {isModalOpen &&
                <Modal >
                    {isLoading ? <Preloader /> :
                        (<>
                            <Ava alt="" src={user.avatar_url} />
                            <UserInfo>
                                {user.name && <div>Name: {user.name}</div>}
                                {user.location && <div>Location: {user.location}</div>}
                                {user.email && <div>Email: {user.email}</div>}
                            </UserInfo>
                            {user.email && <div>{user.email}</div>}
                        </>)}
                    <Button onClick={onCloseModal}>Закрыть</Button>
                </Modal>}
            {usersArr}
        </>
    )
}

export default User
