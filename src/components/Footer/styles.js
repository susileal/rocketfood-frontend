import styled from "styled-components";


export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: center;
  

  
  >span{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    margin-left: 69.4rem;
    
  
  }

  @media (max-width: 768px) {
    
    width: 42.8rem;
    span{

      margin-left: 0.8rem;
    }
 

      
    }
  `;











