import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Input, Label, Row, Error, LabelText } from './FormComponents'
import { InputProps } from '../../types'
import { MdPersonOutline } from 'react-icons/md'

const Name = ({ errors, register }: InputProps) => {
    const { content } = useContext(GlobalContext)
    return (
        <Row>
            <Label htmlFor='name'>
                <MdPersonOutline />
                <LabelText>{content.contact.name}</LabelText>
            </Label>
            <Input
                type='text'
                name='name'
                ref={register({
                    required: true,
                })}
            />
            {errors.name && errors.name.type === 'required' && (
                <Error>{content.contact.errors.name}</Error>
            )}
        </Row>
    )
}

export default Name
