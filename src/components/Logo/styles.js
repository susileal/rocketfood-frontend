import styled from "styled-components";

// se tiver ativo é laranja se não tiver é cinza
export const Container = styled.div`
    display: flex;
    align-items: center;
    
  > svg{
    font-size: ${({ isFont}) => isFont ? "4.9rem" : "3rem"};
    border: none;
    cursor: pointer;
    color: ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_200 : theme.COLORS.BLUE_100};
  }
 

    strong{
      font-size: ${({ isFont}) => isFont ? "4.2rem" : "2.4rem"};
      font-family: 'Roboto', sans-serif;
      font-weight: 700; 
      color:  ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
     
      margin-left: 1.0rem;
      
    }
 
`;