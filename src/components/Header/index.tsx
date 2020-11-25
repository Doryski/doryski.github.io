import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Logo from './Logo'
import LangSwitch from './LangSwitch'
import { GlobalContext } from '../../context'
import { MdMenu, MdClose } from 'react-icons/md'
import useDialogHandler from '../../helpers/useDialogHandler'
import useHandleMobileMenu from '../../helpers/useHandleMobileMenu'

const Header = () => {
    const { isMobile, isDesktop } = useContext(GlobalContext)
    const burgerRef = useRef<HTMLButtonElement>(null!)
    const menuRef = useRef<HTMLUListElement>(null!)
    const {
        isDialogOpen: isNavOpen,
        toggle,
        close,
    } = useDialogHandler(false)
    useHandleMobileMenu([burgerRef, menuRef], close)

    return (
        <HeaderWrapper>
            {(!isMobile && !isDesktop) || isMobile ? (
                <>
                    <NavWrapper>
                        <Logo />
                        <BurgerWrapper>
                            <LangSwitch />
                            <Button
                                ref={burgerRef}
                                type='button'
                                aria-label='Toggle navigation'
                                onClick={toggle}
                            >
                                <MenuIcon isNavOpen={isNavOpen} />
                            </Button>
                        </BurgerWrapper>
                    </NavWrapper>
                    {isNavOpen && (
                        <Menu menuRef={menuRef} close={close} />
                    )}
                </>
            ) : (
                <NavWrapper>
                    <Logo />
                    <MenuWrapper>
                        <Menu />
                        <LangSwitch />
                    </MenuWrapper>
                </NavWrapper>
            )}
        </HeaderWrapper>
    )
}
export const HeaderWrapper = styled.header`
    height: ${({ theme }) => theme.header};
    width: 100%;
    max-width: 1400px;
    z-index: 5;
`
export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    @media only screen and (min-width: 400px) {
        width: 80%;
    }
`
export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
export const Button = styled.button`
    border: none;
    background: transparent;
    display: flex;
`
export const BurgerWrapper = styled.div`
    display: flex;
    @media only screen and (min-width: 900px) {
        display: none;
    }
`
export const MenuIcon = styled(
    ({ isNavOpen, ...props }: { isNavOpen: boolean }) =>
        isNavOpen ? <MdClose {...props} /> : <MdMenu {...props} />
)`
    width: 1.8rem;
    height: 1.8rem;
`

export default Header
