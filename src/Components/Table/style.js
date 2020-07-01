import styled from 'styled-components'

export const TablePage = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;

  ul{
    width:100%;
    display:flex;
    list-style:none;
    align-items:center;
    justify-content:flex-end;
    height:10%;
    padding:0 10px;

    input {
            width: 20%;
            margin-right: 10%;
            font-size: 18px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
        }
  }
`
export const MenuItem = styled.li`
    color:${({ theme,active })=> active ? theme.primary : '#8C8C8C'};
    margin:0 10px;
    cursor:pointer;
    font-weight:bold;
`

export const TableComponent = styled.div`
    width: 95%;
    height: 90%;
    padding:10px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow-y:auto;
    color: ${({theme}) => theme.primary};
    gap:15px;

    @media (max-width:1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width:768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    div{
        background-color:${({theme}) => theme.secundary};
        display:flex;
        align-items:center;
        justify-content:space-between;
        border-radius:15px;
        box-shadow:0 3px 6px rgba(0,0,0,0.35);
        padding:20px 30px;


    }
`;

