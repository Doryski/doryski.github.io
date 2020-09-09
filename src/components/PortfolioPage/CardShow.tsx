import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../shared/Button'
import { Project } from '../../types'

const CardShow = ({ project }: { project: Project }) => {
    const { content } = useContext(GlobalContext)

    return (
        <Wrapper>
            <ShowIntro>{content.portfolio.show.showIntro}</ShowIntro>
            <List>
                <Link to={project.demoUrl}>
                    <IntroButton>
                        {content.portfolio.show.showDemo}
                    </IntroButton>
                </Link>
                <Link to={project.codeUrl}>
                    <IntroButton>
                        {content.portfolio.show.showCode}
                    </IntroButton>
                </Link>
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
