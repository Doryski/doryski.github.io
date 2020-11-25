import React from 'react'
import HomePage from './HomePage'
import Header from './Header'
import styled from 'styled-components'
import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'
import Footer from './Footer'
import bgHome from '../images/bg_home.png'

const Layout = () => (
    <AppContainer>
        <ContentContainer>
            <BackgroundImg background={bgHome}>
                <BackgroundBlur>
                    <Header />
                    <HomePage />
                </BackgroundBlur>
            </BackgroundImg>
            <PortfolioPage />
            <ContactPage />
            <Footer />
        </ContentContainer>
    </AppContainer>
)

export const AppContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    min-height: 100vh;
`

export const ContentContainer = styled.div`
    max-width: 1380px;
    height: 100%;
    margin: 0 auto;
`

export const BackgroundImg = styled.main<{ background: string }>`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(${({ background }) => background});
    background-size: cover;
    background-position: center;
`

export const BackgroundBlur = styled.div`
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0.25) 100%
    );
`

export default Layout
