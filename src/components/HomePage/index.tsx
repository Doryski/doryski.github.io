import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import bgHome from '../../images/bg_home.png'
import { Button } from '../shared/Button'
import { PORTFOLIO_PATH, CONTACT_PATH } from '../../helpers/utils'

const HomePage = () => {
    const { content } = useContext(GlobalContext)

    return (
        <BackgroundImg>
            <BackgroundBlur>
                <ContentWrapper>
                    <h3>Dominik Rycharski</h3>
                    <Note>{content.home.note}</Note>
                    <h3>Front End Developer</h3>
                    <CtaWrapper>
                        <CallToAction>
                            <Link to={PORTFOLIO_PATH}>
                                {content.home.cta.portfolio}
                            </Link>
                        </CallToAction>
                        <CallToAction>
                            <Link to={CONTACT_PATH}>
                                {content.home.cta.contact}
                            </Link>
                        </CallToAction>
                    </CtaWrapper>
                </ContentWrapper>
            </BackgroundBlur>
        </BackgroundImg>
    )
}
export const BackgroundImg = styled.main`
    position: relative;
    height: 90vh;
    background-image: url(${bgHome});
    background-size: cover;
    background-position: center;
`

export const BackgroundBlur = styled.div`
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0.25) 100%
    );
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media only screen and (min-width: 900px) {
        align-items: start;
        margin-left: 3em;
        font-size: 125%;
    }
`
export const Note = styled.h2`
    margin: 1em 0;
    text-align: center;
    font-size: 1.7em;
`
export const CtaWrapper = styled.section`
    margin-top: 2em;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 500px;
    @media only screen and (min-width: 900px) {
        justify-content: left;
    }
`
export const CallToAction = styled(Button)`
    font-size: 1em;
    width: 150px;
    padding: 0;
    &:last-of-type {
        background: transparent;
        &:hover {
            background: ${({ theme }) =>
                theme.colors.primarySecondary};
        }
    }
    @media only screen and (min-width: 900px) {
        width: 200px;
        &:last-of-type {
            margin-left: 2em;
        }
    }
`
const Link = styled(RouteLink)`
    display: block;
    padding: 0.7em 1em;
    width: 100%;
    height: 100%;
`
export default HomePage
