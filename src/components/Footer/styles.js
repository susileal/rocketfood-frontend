import styled from "styled-components";


export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.3rem;

  
  >span{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    
  
  }
  `;











