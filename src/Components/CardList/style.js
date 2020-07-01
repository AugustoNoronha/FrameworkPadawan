import styled from 'styled-components';

export const CardListPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;

        input {
            width: 20%;
            font-size: 18px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
        }
    }
`;

export const CardListComponent = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
`;

export const Card = styled.div`
    width: 350px;
    height: 230px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
    background: ${({ theme }) => theme.secundary};
    color: ${({ theme }) => theme.primary};
    margin: 10px;
    border-radius: 15px;

    h1 {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;