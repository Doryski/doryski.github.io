const theme = {
    colors: {
        primary: '#4C4C9D',
        secondary: '#F4B266',
        primarySecondary: '#f3d9bc',
        indigo: '#540D6E',
        light: '#e6e6e4',
        dark: '#080705',
    },
    padding: {
        small: '.4em',
        medium: '.7em',
        large: '1em',
        xl: '1.3em',
        xxl: '3em',
    },
    font: {
        thin: 300,
        regular: 400,
        bold: 800,
    },
    media: {
        mobile: '@media only screen and (min-width: 600px)',
        tablet: '@media only screen and (min-width: 728px)',
        900: '@media only screen and (min-width: 900px)',
        desktop: '@media only screen and (min-width: 1024px)',
    },
}
export type ThemeType = typeof theme

export default theme
