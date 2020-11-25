import { useState, useEffect, useRef } from 'react'
import getWindowWidth from './getWindowWidth'

export default function useDeviceDetect(
    mobileBreakpoint: number,
    desktopBreakpoint: number
) {
    const isMobileWidth = () => getWindowWidth() < mobileBreakpoint
    const isDesktopWidth = () => getWindowWidth() > desktopBreakpoint

    const [isMobile, setIsMobile] = useState(isMobileWidth())
    const [isDesktop, setIsDesktop] = useState(isDesktopWidth())
    const resizeListener = useRef(() => {})

    resizeListener.current = () => {
        setIsMobile(isMobileWidth())
        setIsDesktop(isDesktopWidth())
    }
    useEffect(() => {
        window.addEventListener('resize', resizeListener.current)

        return () => {
            window.removeEventListener(
                'resize',
                resizeListener.current
            )
        }
    }, [])
    return { isMobile, isDesktop }
}
