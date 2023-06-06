import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 9.6rem auto 7.7rem;
  grid-template-areas:
  "header"
  "content"
  "footer";

  main{

    grid-area: content;
    margin-bottom: 10rem;

    header{
      margin: 1rem 15rem;
    }
  }
  
`;

export const Form = styled.form`
  width: 47.6rem;
  height: 68.1rem;
  margin: 9.0rem 10.8rem 11.2rem;
  padding: 4.4rem;
  border-radius: 1.6rem;
  margin: auto;
  text-align: center;
  
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_300};

  > h1{
    font-size: 3.2rem;
  }

  button{
    margin: 3.2rem 0;
  }


  
`;




