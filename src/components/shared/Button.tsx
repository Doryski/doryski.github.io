import styled from 'styled-components'

export const Button = styled.button`
    font-weight: ${({ theme }) => theme.font.bold};
    text-align: center;
    padding: ${({ theme }) =>
        `${theme.padding.medium} ${theme.padding.large}`};
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    &:hover {
        background: ${({ theme }) => theme.colors.secondary};
    }
`
