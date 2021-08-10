import Flex from 'components/common/Flex'
import { useMemo } from 'react'
import Ava from './Ava'
import UserInfo from './UserInfo'

const User = ({ users }) => {

    const usersArr = useMemo(() => users.map(u => (
        <Flex key={u.id} border="1px solid #000" align="center" margin="10px" padding="20px" width="25%">
            <Ava alt="" src={u.avatar_url} />
            <UserInfo>
                <div>{u.id}</div>
                <div>{u.login}</div>
                <div>Тип:{u.type}</div>
                <a href={u.html_url} target="_blank" rel="noreferrer">Профиль</a>
            </UserInfo>
        </Flex>
    )), [users])

    return (
        <>
            {usersArr}
        </>
    )

}

export default User
