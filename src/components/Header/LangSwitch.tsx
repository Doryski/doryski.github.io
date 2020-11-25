import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import styled from 'styled-components'
import flagPL from '../../icons/PL_flag.svg'
import flagUK from '../../icons/UK_flag.svg'

const LangSwitch = () => {
    const { changeLanguage } = useContext(GlobalContext)

    return (
        <StyledWrapper>
            <Flag
                title='polski'
                onClick={changeLanguage}
                data-language='pl'
                src={flagPL}
                alt='PL'
            />
            <Flag
                title='english'
                onClick={changeLanguage}
                data-language='en'
                src={flagUK}
                alt='EN'
            />
        </StyledWrapper>
    )
}
export const StyledWrapper = styled.div`
    padding: 0 0 0 ${({ theme }) => theme.padding.medium};
    display: flex;
    @media only screen and (max-width: 900px) {
        padding: 0 ${({ theme }) => theme.padding.medium};
    }
`
export const Flag = styled.img`
    margin: 0 0.2em;
    width: 1.3em;
    cursor: pointer;
`
export default LangSwitch
