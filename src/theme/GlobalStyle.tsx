import { createGlobalStyle } from 'styled-components'
import Montserrat from '../fonts/Montserrat/Montserrat-Regular.ttf'
import { ThemeType } from '.'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
    }
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Montserrat', sans-serif !important;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    button {
        cursor: pointer;
        text-align: center;
    }

    input, input::placeholder, textarea, button {
        font-family: inherit;
        outline: none;
    }
`

export default GlobalStyle
