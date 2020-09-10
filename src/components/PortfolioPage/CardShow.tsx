import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import styled from 'styled-components'
import { Button } from '../shared/Button'
import { Project } from '../../types'

const CardShow = ({ project }: { project: Project }) => {
    const { content } = useContext(GlobalContext)

    return (
        <Wrapper>
            <ShowIntro>{content.portfolio.show.showIntro}</ShowIntro>
            <List>
                <IntroButton
                    as='a'
                    href={project.demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {content.portfolio.show.showDemo}
                </IntroButton>
                <IntroButton
                    as='a'
                    href={project.codeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {content.portfolio.show.showCode}
                </IntroButton>
            </List>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
`
const ShowIntro = styled.h4`
    margin-top: ${({ theme }) => theme.padding.large};
    margin-bottom: ${({ theme }) => theme.padding.medium};
    text-align: center;
`
const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    @media only screen and (min-width: 1225px) {
        font-size: 80%;
    }
`

const IntroButton = styled(Button)`
    padding: ${({ theme }) =>
        `${theme.padding.medium} ${theme.padding.large}`};
    width: 100px;
`
export default CardShow
