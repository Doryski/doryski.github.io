import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Row, Submit } from './FormComponents'
import { MdSend } from 'react-icons/md'
import SubmitFormModal from './SubmitFormModal'

const SubmitForm = ({
    children,
    isDialogOpen,
}: {
    children: React.ReactNode
    isDialogOpen: boolean
}) => {
    const { content, isDesktop } = useContext(GlobalContext)
    return (
        <>
            <Row>
                <Submit type='submit'>
                    {content.contact.submit}
                    {isDesktop && <MdSend />}
                </Submit>
            </Row>
            <SubmitFormModal isDialogOpen={isDialogOpen}>
                {children}
            </SubmitFormModal>
        </>
    )
}

export default SubmitForm
