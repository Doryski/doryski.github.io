import React from 'react'
import GlobalContextProvider from './context'
import Layout from './components/Layout'
import GlobalStyle from './theme/GlobalStyle'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons'

const App = () => (
    <GlobalContextProvider>
        <ThemeProvider theme={theme}>
            <IconContext.Provider
                value={{
                    size: '1.5rem',
                    className: 'react-icons',
                }}
            >
                <GlobalStyle />
                <Layout />
            </IconContext.Provider>
        </ThemeProvider>
    </GlobalContextProvider>
)

export default App
