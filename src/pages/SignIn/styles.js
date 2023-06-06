import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: stretch;
 
  > section{
    margin: 34.1rem 15.5rem;
   
  }

`;

export const Form = styled.form`
  width: 47.6rem;
  height: 54.0rem;
  margin: 14.2rem 10.8rem;
  padding: 6.4rem;
  border-radius: 1.6rem;
 
  

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_300};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  > h1 {
    font-size: 3.2rem;
    color:${({ theme }) => theme.COLORS.WHITE};
  }

 >button{
  margin: 3.2rem 0;
 }

`;

