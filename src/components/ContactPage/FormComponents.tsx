import styled from 'styled-components'
import { Button } from '../shared/Button'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 900px) {
        margin: 0 auto;
        width: 90%;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: start;
    }
`
export const Input = styled.input`
    margin-top: 1em;
    font-size: 1em;
    width: 100%;
    height: 3em;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding-left: 0.3em;
    box-shadow: none;
    @media only screen and (min-width: 900px) {
        width: 350px;
    }
    @media only screen and (min-width: 1024px) {
        width: 400px;
    }
`

export const Label = styled.label`
    position: absolute;
    left: 0;
    top: -5px;
    font-weight: bold;
    @media only screen and (min-width: 900px) {
        font-size: 125%;
        top: -13px;
    }
`
export const Column = styled.section``

export const Row = styled.section`
    position: relative;
    margin-top: 1em;
    width: 50%;
    min-width: 300px;
    @media only screen and (min-width: 900px) {
        display: flex;
        flex-direction: column;
        &:nth-of-type(2) {
            margin-top: 1.5em;
            width: auto;
        }
        &:last-of-type {
            display: block;
        }
    }
`

export const Small = styled.span`
    color: rgb(207, 0, 0);
    font-weight: bold;
    font-size: 0.8em;
    @media only screen and (min-width: 900px) {
        margin-top: 0.3em;
    }
`
export const Textarea = styled.textarea`
    resize: none;
    font-size: 1em;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 0.3em;
    box-shadow: none;
    @media only screen and (min-width: 900px) {
        width: 350px;
    }
    @media only screen and (min-width: 1024px) {
        width: 400px;
    }
`
export const TextareaLabel = styled(Label)`
    top: -22px;
    @media only screen and (min-width: 900px) {
        top: -30px;
    }
`
export const TextareaRow = styled(Row)`
    margin-top: 2em;
`

export const Submit = styled(Button)`
    float: right;
    cursor: pointer;
    font-size: 1em;
    @media only screen and (min-width: 900px) {
        font-size: 125%;
    }
`
