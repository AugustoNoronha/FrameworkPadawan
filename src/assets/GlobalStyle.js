import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle` 
    *{
      margin:0 ;
      padding:0;
      border:0;
      outline:0;
      box-sizing:border-box;
    }

    html,
    body{
      height:100%;
      font-family:sans-serif;
      background: ${({ theme }) => theme.secundary};
      transition: all ease-in-out 250ms;
    }

    input,
    button{
      border:0;
      outline:0;
      font-family:sans-serif;
    }
`
export default GlobalStyle