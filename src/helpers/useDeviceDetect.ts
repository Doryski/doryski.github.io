import { useState, useEffect } from 'react'

export default function useDeviceDetect(
    mobileBreakpoint: number,
    desktopBreakpoint: number
) {
    const [isMobile, setIsMobile] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)

    const getWindowWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth

    useEffect(() => {
        const resizeListener = () => {
            setIsMobile(getWindowWidth() < mobileBreakpoint)
            setIsDesktop(getWindowWidth() > desktopBreakpoint)
        }
        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [isMobile, isDesktop, mobileBreakpoint, desktopBreakpoint])
    return { isMobile, isDesktop }
}
