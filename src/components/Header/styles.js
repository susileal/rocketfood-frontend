import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: center;

  >section{
    width: 21.6rem;
    
  }
    >header{
      text-align: right;
      span{
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.BLUE};
        }

    }
  

    @media(max-width: 768px)  {
      width: 52.8rem;
      >header{
        
        display: flex;
        
        align-items: center;
        margin: 6.0rem 2.8rem;
        justify-content: center;
        gap: 0.8rem;

      }

      button{
        width: 2.4rem;
        margin-right: 6rem;
        
      }

      
   
     
      

  }

  `;

export const Search = styled.div`
  width: 58.1rem;
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








