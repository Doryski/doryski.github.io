import React from 'react'
import styled from 'styled-components'

const Logo = () => (
    <Link href='/'>
        <Content>{'< { Doryski } >'}</Content>
    </Link>
)

export const Link = styled.a`
    display: block;
    width: 150px;
    min-width: 150px;
`

export const Content = styled.i`
    font-weight: ${({ theme }) => theme.font.bold};

    font-size: 1rem;
    @media only screen and (min-width: 450px) {
        font-size: 1.3rem;
    }
`
export default Logo
