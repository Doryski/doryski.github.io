import { createGlobalStyle } from 'styled-components'
import Montserrat from '../fonts/Montserrat/Montserrat-Regular.ttf'
import { ThemeType } from '.'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
    }
    
    body {
        font-family: 'Montserrat', sans-serif;
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
    }
`

export default GlobalStyle
