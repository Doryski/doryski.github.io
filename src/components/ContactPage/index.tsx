import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../../context'
import SectionName from '../shared/SectionName'
import { useForm } from 'react-hook-form'
import SubmitForm from './SubmitForm'
import Message from './Message'
import Email from './Email'
import Name from './Name'
import { Form, Success, Error } from './FormComponents'
import postMessage from '../../helpers/postMessage'
import PageWrapper from '../shared/PageWrapper'
import { FORMSPREE_LINK } from '../../helpers/utils'
import useDialogHandler from '../../helpers/useDialogHandler'
import useDetectOutsideClick from '../../helpers/useDetectOutsideClick'
import styled from 'styled-components'

const ContactPage = () => {
    const { content, isMobile } = useContext(GlobalContext)
    const { register, handleSubmit, errors, reset } = useForm()
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const { isDialogOpen, open, close } = useDialogHandler(false)
    const openModal = (openFn: () => void, messageFn: () => void) => {
        openFn()
        messageFn()
    }
    const dialogRef = useRef<HTMLDivElement>(null!)
    useDetectOutsideClick(dialogRef, close)
    const onSubmit = handleSubmit(data => {
        postMessage(
            FORMSPREE_LINK,
            data,
            () => openModal(open, () => setSuccess(true)),
            () => openModal(open, () => setFailure(true))
        )
        reset()
    })

    const name = <Name errors={errors} register={register} />
    const email = <Email errors={errors} register={register} />
    const message = <Message errors={errors} register={register} />
    const submitForm = (
        <SubmitForm isDialogOpen={isDialogOpen}>
            <DialogBlur>
                <DialogContent ref={dialogRef}>
                    {success && (
                        <Success fontSize='1rem'>
                            {content.contact.success}
                        </Success>
                    )}
                    {failure && (
                        <Error fontSize='1rem'>
                            {content.contact.failure}
                        </Error>
                    )}
                </DialogContent>
            </DialogBlur>
        </SubmitForm>
    )

    return (
        <PageWrapper id='contact'>
            <SectionName>{content.contact.sectionName}</SectionName>
            <Form onSubmit={onSubmit}>
                {isMobile ? (
                    <>
                        {name}
                        {email}
                        {message}
                        {submitForm}
                    </>
                ) : (
                    <>
                        <section>
                            {name}
                            {email}
                        </section>
                        <section>
                            {message}
                            {submitForm}
                        </section>
                    </>
                )}
            </Form>
        </PageWrapper>
    )
}
export const DialogBlur = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`
export const DialogContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 300px;
    height: 200px;
`

export default ContactPage
