import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 136px auto;
  grid-template-areas:
  "header"
  "content";

  >footer{
    margin-top: 19.9rem;
  }

  >a{
    margin-left: 12.2rem;
  }

 
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   
>img{
  margin-right: 4.7rem;
}

>div{
  width: 68.7rem;
  height: 30.0rem;

  h1{
    font-size: 4.0rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
 
  }

  p{
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 2.4rem;
    text-align: justify;
  }

  button{
   width: 13.1rem;  
   
  }

  
    
    
  }

`;










