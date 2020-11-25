import React, { useState, createContext } from 'react'
import translationPL from '../translations/pl'
import translationEN from '../translations/en'
import useDeviceDetect from '../helpers/useDeviceDetect'
import { ContextType } from '../types'

const initLanguage = window.navigator.language === 'pl' ? 'pl' : 'en'

const initialContext = {
    language: initLanguage,
    isMobile: false,
    isDesktop: false,
    changeLanguage: (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) => {},
    content: translationPL,
}
export const GlobalContext = createContext<ContextType>(
    initialContext
)

const GlobalContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [language, setLanguage] = useState(initLanguage)
    const { isMobile, isDesktop } = useDeviceDetect(760, 900)

    const changeLanguage = (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) => {
        const { language } = (e.target as HTMLImageElement).dataset
        if (!!language) return setLanguage(language)
        return
    }

    const content =
        !!translationEN && language === 'en'
            ? translationEN
            : !!translationPL && language === 'pl'
            ? translationPL
            : null!

    return (
        <GlobalContext.Provider
            value={{
                language,
                changeLanguage,
                content,
                isMobile,
                isDesktop,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
