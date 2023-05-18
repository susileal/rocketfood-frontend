import styled from "styled-components";

// se tiver ativo é laranja se não tiver é cinza
export const Container = styled.div`
    display: flex;
    align-items: center;
    
    
  > svg{
    font-size: 3rem;
    border: none;
    cursor: pointer;
    color: ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_200 : theme.COLORS.BLUE_100};
  }
 

  > div{
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;
    text-align: right;
    
    span{
      font-size: 1.2rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: ${({theme, isActive}) => isActive ? "transparent" : theme.COLORS.BLUE};
    }

    strong{
      font-size: 2.4rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 700; 
      color:  ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
      padding-top: 2.5rem;
      margin-left: 1.0rem;
      
    }
  } 
`;