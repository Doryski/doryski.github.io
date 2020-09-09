import styled from 'styled-components'

const Center = styled.div<{ height?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({ height }) => height || '100%'};
`
export default Center
