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
                onClick={changeLanguage}
                data-language='pl'
                src={flagPL}
                alt='PL'
            />{' '}
            <Flag
                onClick={changeLanguage}
                data-language='en'
                src={flagUK}
                alt='EN'
            />
        </StyledWrapper>
    )
}
const StyledWrapper = styled.div`
    padding: 0 ${({ theme }) => theme.padding.medium};
    display: flex;
`
const Flag = styled.img`
    margin: 0 0.2em;
    width: 1.8em;
    cursor: pointer;
`
export default LangSwitch
