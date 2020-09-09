import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Header from './Header'
import { PORTFOLIO_PATH, CONTACT_PATH } from '../helpers/utils'
import Center from './shared/Center'
import PageWrapper from './shared/PageWrapper'
const PortfolioPage = lazy(() => import('./PortfolioPage'))
const ContactPage = lazy(() => import('./ContactPage'))

const Content = () => (
    <>
        <Header />
        <React.Suspense
            fallback={
                <PageWrapper>
                    <Center height='90vh'>
                        <h1>Loading...</h1>
                    </Center>
                </PageWrapper>
            }
        >
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route
                    exact
                    path={PORTFOLIO_PATH}
                    component={PortfolioPage}
                />

                <Route
                    exact
                    path={CONTACT_PATH}
                    component={ContactPage}
                />
            </Switch>
        </React.Suspense>
    </>
)

export default Content
