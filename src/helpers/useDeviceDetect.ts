import { useState, useEffect } from 'react'

export default function useDeviceDetect(
    mobileBreakpoint: number,
    desktopBreakpoint: number
) {
    const getWindowWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth

    const isMobileWidth = () => getWindowWidth() < mobileBreakpoint
    const isDesktopWidth = () => getWindowWidth() > desktopBreakpoint

    const [isMobile, setIsMobile] = useState(isMobileWidth())
    const [isDesktop, setIsDesktop] = useState(isDesktopWidth())

    useEffect(() => {
        const resizeListener = () => {
            setIsMobile(isMobileWidth())
            setIsDesktop(isDesktopWidth())
        }
        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])
    return { isMobile, isDesktop }
}
