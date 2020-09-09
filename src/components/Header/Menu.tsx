import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link as RouteLink } from 'react-router-dom'
import { GlobalContext } from '../../context'
import { PORTFOLIO_PATH, CONTACT_PATH } from '../../helpers/utils'

const Menu = ({
    close,
    menuRef,
}: {
    close?: () => void
    menuRef?: React.RefObject<HTMLUListElement>
}) => {
    const { content } = useContext(GlobalContext)

    return (
        <MenuWrapper>
            <List ref={menuRef}>
                <li>
                    <Link to='/' onClick={close}>
                        {content.nav.home}
                    </Link>
                </li>
                <li>
                    <Link to={PORTFOLIO_PATH} onClick={close}>
                        {content.nav.portfolio}
                    </Link>
                </li>
                <li>
                    <Link to={CONTACT_PATH} onClick={close}>
                        {content.nav.contact}
                    </Link>
                </li>
            </List>
        </MenuWrapper>
    )
}
const MenuWrapper = styled.div`
    text-align: center;
    @media only screen and (min-width: 760px) {
        height: 100%;
    }
`
const List = styled.ul`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 5;
    @media only screen and (min-width: 760px) {
        background: none;
        flex-direction: row;
        position: relative;
        height: 100%;
    }
`
const Link = styled(RouteLink)`
    display: block;
    height: 100%;
    width: 100%;
    font-weight: 600;
    padding: ${({ theme }) => theme.padding.medium} 0;
    &:hover {
        background: ${({ theme }) => theme.colors.secondary};
    }
    @media only screen and (min-width: 760px) {
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        padding: 0 ${({ theme }) => theme.padding.xxl};
        max-width: 150px;
        &:hover {
            background: ${({ theme }) => theme.colors.primary};
        }
    }
`
export default Menu
