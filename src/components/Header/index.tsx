import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Logo from './Logo'
import LangSwitch from './LangSwitch'
import { GlobalContext } from '../../context'
import { Menu as MenuIcon } from '@styled-icons/zondicons'
import useDialogHandler from '../../helpers/useDialogHandler'
import useHandleMobileMenu from '../../helpers/useHandleMobileMenu'

const Header = () => {
    const { isMobile } = useContext(GlobalContext)

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
            {isMobile ? (
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
                                <MenuIcon size='26' />
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
const HeaderWrapper = styled.header`
    height: 10vh;
    background: ${({ theme }) => theme.colors.primary};
    align-items: center;
    position: relative;
`
const NavWrapper = styled.nav`
    padding: 0 ${({ theme }) => theme.padding.large};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media only screen and (min-width: 900px) {
        padding: 0 ${({ theme }) => theme.padding.large} 0 3em;
    }
`
const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
const Button = styled.button`
    border: none;
    background: transparent;
`
const BurgerWrapper = styled.div`
    display: flex;
    @media only screen and (min-width: 760px) {
        display: none;
    }
`
export default Header
