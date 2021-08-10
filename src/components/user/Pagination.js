import Button from 'components/common/Button'
import Flex from 'components/common/Flex'
import { useMemo } from 'react'

const Pagination = ({ onSwitchPage, currentPage, totalUsers, portionUsers }) => {

    const totalPage = useMemo(() => Math.ceil(totalUsers / portionUsers), [totalUsers, portionUsers])

    return (
        <Flex justify="center" width="100%">
            <Button disabled={currentPage === 1 ? true : false} onClick={() => { onSwitchPage(currentPage - 1) }}>
                prev
            </Button>
            <Button disabled={currentPage === totalPage ? true : false} onClick={() => { onSwitchPage(currentPage + 1) }}>
                next
            </Button>
        </Flex>
    )

}

export default Pagination
