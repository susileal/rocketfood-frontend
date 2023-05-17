import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;

  height: 8.9rem;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  gap: 3.2rem;
  padding-bottom: 2.8rem;

  >button{
    width: 21.6rem;
    margin-top: 2rem;
  }
 
  `;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  
    
  >svg{
    font-size: 3rem;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.COLORS.BLUE_100};
  }
 

  > div{
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;
    text-align: right;
    color: ${({theme}) => theme.COLORS.WHITE};

   
    span{
      font-size: 1.2rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.BLUE};
    }

    strong{
      font-size: 2.4rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.WHITE};
      padding-top: 2.5rem;
      margin-left: 1.0rem;
      
    }
  }
`;

export const Search = styled.div`
  width: 58.1rem;
  display: flex;
  align-items: center;
  padding-top: 2rem; 
  margin-left: -11rem;
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
      margin-right: -8rem;
     
`;








