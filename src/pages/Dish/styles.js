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

  > main{
    grid-area: content;
   
   
  }


`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  > header{
    display: flex;
    flex-direction: column;
    margin: 2.4rem 0 15.5rem;
    img{
      width: 39.0rem;
      margin: 4.2rem 4.7rem 0 0 ;
    }
  }
  
  >div{
    width: 68.7rem;
    
    h1{
      font-size: 4.0rem;
      font-weight: 500;
      line-height: 3.4rem
    }
  
    p{
      font-size: 2.4rem;
      font-weight: 400;
      text-align: justify;
      margin: 2.4rem 0;
      line-height: 3.4rem
    }
  
    button{
      margin-top: 4.8rem;
      width: 13.1rem;  
    }
  }

 
  
`;











