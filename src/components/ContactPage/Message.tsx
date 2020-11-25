import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import {
    Error,
    TextareaLabel,
    TextareaRow,
    Textarea,
    LabelText,
} from './FormComponents'
import { InputProps } from '../../types'
import { MdMessage } from 'react-icons/md'

const Message = ({ errors, register }: InputProps) => {
    const { content } = useContext(GlobalContext)
    return (
        <TextareaRow>
            <TextareaLabel htmlFor='message'>
                <MdMessage />
                <LabelText>{content.contact.message}</LabelText>
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
