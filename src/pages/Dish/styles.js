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

  overflow-y: scroll;

  > main{
    grid-area: content;
    padding: 10.0rem 0;
  }

`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4.7rem;
   
  >a{
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom:4.2rem;
  }

`;

export const Content = styled.div`
  max-width: 80.0rem;
  margin: 0 auto;
  display: flex;

  h1{
    font-size: 4.0rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  p{
    font-size: 2.4rem;
    font-weight: 400;
    text-align: justify;
  }

  button{
    width: 13.1rem;   
  }
`;










