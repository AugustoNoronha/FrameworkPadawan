import styled from 'styled-components';

export const Switcher = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;

    svg {
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.primary}
    }
`;
