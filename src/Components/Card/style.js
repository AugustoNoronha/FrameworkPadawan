import styled from 'styled-components'

export const CardComponet = styled.div`
  width:90%;
  max-width:350px;
  height:550px;
  background: ${({ theme }) => theme.securdary};
  box-shadow: 0 3px 6px rgba(0,0,0,0.35);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in 200ms;
  cursor: pointer;
  margin:15px;

    :hover {
        transform: scale(1.05);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.45);
        opacity: 0.8;
    }

    h1 {
        color: ${({ theme }) => theme.primary};
        text-transform: capitalize;
    }
`;

