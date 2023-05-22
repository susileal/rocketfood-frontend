import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

 
  > section{
    margin-left: 15.5rem;
   
  }

  

`;

export const Form = styled.form`
  width: 47.6rem;
  height: 62.1rem;
  margin: 9.0rem 10.8rem;
  padding: 6.4rem;
  border-radius: 1.6rem;
  

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_300};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  > label{
    width: 34.8rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin: 3.2rem 0 0.8rem;
  }

  > h1 {
    font-size: 3.2rem;
    color:${({ theme }) => theme.COLORS.WHITE};
  }

  > button{
    margin: 3.2rem;
  }

  > a{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`;

