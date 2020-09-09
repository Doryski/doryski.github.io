import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import {
    Small,
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
                <Small>{content.contact.errors.message}</Small>
            )}
        </TextareaRow>
    )
}

export default Message
