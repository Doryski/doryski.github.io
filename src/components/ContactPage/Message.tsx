import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import {
    Error,
    TextareaLabel,
    TextareaRow,
    Textarea,
} from './FormComponents'
import { InputProps } from '../../types'

const Message = ({ errors, register }: InputProps) => {
    const { content } = useContext(GlobalContext)
    return (
        <TextareaRow>
            <TextareaLabel htmlFor='message'>
                {content.contact.message}
            </TextareaLabel>
            <Textarea
                name='message'
                rows={10}
                cols={10}
                wrap='hard'
                ref={register({ required: true })}
            />
            {errors.message && (
                <Error>{content.contact.errors.message}</Error>
            )}
        </TextareaRow>
    )
}

export default Message
