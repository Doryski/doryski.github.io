import React, { useContext } from 'react'
import styled from 'styled-components'
import { DiGithubBadge } from 'react-icons/di'
import { GlobalContext } from '../../context'

const Footer = () => {
    const { content } = useContext(GlobalContext)
    return (
        <Wrapper>
            <Content>
                {content.footer.createdBy}
                <a
                    style={{ marginLeft: '0.25em' }}
                    href='https://github.com/Doryski'
                    title='Github'
                >
                    <DiGithubBadge />
                </a>
                <a href='https://github.com/Doryski' title='Github'>
                    Doryski
                </a>
            </Content>
        </Wrapper>
    )
}

export const Wrapper = styled.footer`
    height: ${({ theme }) => theme.footer};
    margin-top: 3em;
`

export const Content = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (min-width: 400px) {
        width: 80%;
    }
`
export default Footer
