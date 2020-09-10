import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Input, Label, Row, Error } from './FormComponents'
import { EMAIL_REGEX } from '../../helpers/utils'
import { InputProps } from '../../types'

const Email = ({ errors, register }: InputProps) => {
    const { content } = useContext(GlobalContext)
    return (
        <Row>
            <Label htmlFor='email'>{content.contact.email}</Label>
            <Input
                name='email'
                placeholder='example@address.com'
                ref={register({
                    required: true,
                    pattern: EMAIL_REGEX,
                })}
            />
            {errors.email && errors.email.type === 'required' && (
                <Error>{content.contact.errors.email}</Error>
            )}
            {errors.email && errors.email.type === 'pattern' && (
                <Error>{content.contact.errors.emailPattern}</Error>
            )}
        </Row>
    )
}

export default Email
