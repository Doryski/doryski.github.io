import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Row, Submit } from './FormComponents'

const SubmitForm = () => {
    const { content } = useContext(GlobalContext)
    return (
        <Row>
            <Submit type='submit'>{content.contact.submit}</Submit>
        </Row>
    )
}

export default SubmitForm
