import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import SectionName from '../shared/SectionName'
import { useForm } from 'react-hook-form'
import SubmitForm from './SubmitForm'
import Message from './Message'
import Email from './Email'
import Name from './Name'
import { Form, Column } from './FormComponents'
import postMessage from '../../helpers/postMessage'
import PageWrapper from '../shared/PageWrapper'

const ContactPage = () => {
    const { content, isMobile } = useContext(GlobalContext)
    const { register, handleSubmit, errors, reset } = useForm()

    const onSubmit = handleSubmit(data => {
        postMessage(
            'https://formspree.io/xvorpadg',
            data,
            () => alert(content.contact.success),
            () => alert(content.contact.failure)
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
                        <Column>
                            <Name
                                errors={errors}
                                register={register}
                            />
                            <Email
                                errors={errors}
                                register={register}
                            />
                        </Column>
                        <Column>
                            <Message
                                errors={errors}
                                register={register}
                            />
                            <SubmitForm />
                        </Column>
                    </>
                )}
            </Form>
        </PageWrapper>
    )
}
export default ContactPage
