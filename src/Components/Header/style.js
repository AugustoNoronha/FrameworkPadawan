import styled from 'styled-components'

export const HeaderComponent = styled.header`
   
    widows:100%;
    height:100px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    background: ${({theme }) => theme.secundery};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        width:100%;
        position:relative;

        li:first-child{
          cursor: pointer;
          display:flex;
          position: absolute;
          left: 20px;
         
            svg {
                color: ${({ theme }) => theme.primary};
            }
        }
        
    }

    h1{
      color:${({ theme }) => theme.primary};
      text-transform:capitalize;
    }
`;

export const Item = styled.li`
      margin: 0 10px;
      cursor: pointer;
      font-weight: bold;
      color: ${({ theme, active }) => active ? theme.primary : '#8C8C8C'};
      font-size:20px;
`