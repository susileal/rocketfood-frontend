import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  padding-left: 12.3rem;

  >button{
    width: 21.6rem;
  }

  `;

export const Search = styled.div`
  width: 51rem;
  display: flex;
  align-items: center;
  margin: 0 3.2rem 0;
 
`;

export const Logout = styled.button`
      font-size: 3.2rem;
      font-weight: 400;
      border: none;
      background-color: transparent;
      cursor: pointer;
      color: ${({theme}) => theme.COLORS.WHITE};
      display: flex;
      align-items: center;
      margin-left: 3.2rem;
     
`;








