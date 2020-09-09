import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from './context'
import Content from './components/Content'
import GlobalStyle from './theme/GlobalStyle'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

const App = () => (
    <GlobalContextProvider>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Content />
            </ThemeProvider>
        </BrowserRouter>
    </GlobalContextProvider>
)

export default App
