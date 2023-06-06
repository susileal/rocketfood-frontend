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
    
    button{
      text-align: center;
      justify-content: center;
      svg{
        margin-right: 0.8rem;
        color: ${({theme}) => theme.COLORS.WHITE};
      }
    }
    
  }
    >header{
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-right: 4.3rem;

    
      
      span{
          font-size: 1.4rem;
          margin-top: 0.8rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          color: ${({theme}) => theme.COLORS.WHITE};
          
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








