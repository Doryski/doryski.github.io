import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => (
    <Link to='/'>
        <Content>{'< { Doryski } >'}</Content>
    </Link>
)

const Content = styled.i`
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: 1.4em;
`
export default Logo
