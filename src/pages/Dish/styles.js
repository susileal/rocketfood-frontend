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
    margin-left:12.2rem;

    >a{
      display: flex;
      align-items: center;
      font-size: 2.4rem;
      font-weight: 500;
    }
  }


`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 80.0rem;
  margin: 0 auto;
 
  
  >img{

    margin: 4.2rem 4.7rem 0 0 ;
  }

 
  >div{
    width: 68.7rem;

    h1{
      font-size: 4.0rem;
      font-weight: 500;
    }
  
    p{
      font-size: 2.4rem;
      font-weight: 400;
      text-align: justify;
      margin: 2.4rem 0;
    }
  
    button{
      margin-top: 4.8rem;
      width: 13.1rem;  
    }
  }

  
`;










