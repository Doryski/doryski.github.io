import React, { useContext, useState } from 'react'
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

const ContactPage = () => {
    const { content, isMobile } = useContext(GlobalContext)
    const { register, handleSubmit, errors, reset } = useForm()
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    const onSubmit = handleSubmit(data => {
        postMessage(
            'https://formspree.io/xvorpadg',
            data,
            () => setSuccess(true),
            () => setFailure(true)
        )
        reset()
    })

    return (
        <PageWrapper>
            <SectionName>{content.contact.sectionName}</SectionName>
            <Form onSubmit={onSubmit}>
                {isMobile ? (
                    <>
                        <Name errors={errors} register={register} />
                        <Email errors={errors} register={register} />
                        <Message
                            errors={errors}
                            register={register}
                        />
                        <SubmitForm />
                    </>
                ) : (
                    <>
                        <section>
                            <Name
                                errors={errors}
                                register={register}
                            />
                            <Email
                                errors={errors}
                                register={register}
                            />
                        </section>
                        <section>
                            <Message
                                errors={errors}
                                register={register}
                            />
                            <SubmitForm />
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
                        </section>
                    </>
                )}
            </Form>
        </PageWrapper>
    )
}
export default ContactPage
