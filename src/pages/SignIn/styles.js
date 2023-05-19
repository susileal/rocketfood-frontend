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
  height: 54.0rem;
  margin: 14.2rem 10.8rem 14.2rem 0;
  padding: 6.4rem;
  border-radius: 1.6rem;
  

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_300};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  label{
    justify-content: left;
    width: 34.8rem;
    font-size: 1.6rem;
    color:${({ theme }) => theme.RED};
  }

  h1 {
    font-size: 3.2rem;
    color:${({ theme }) => theme.COLORS.WHITE};
  }

  a{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`;

