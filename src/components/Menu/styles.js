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
   
    

    .buttondish{
      margin: 2.4rem 12.2rem 4.2rem;
  
    }

    @media (max-width: 768px) {
      padding: 0rem;
      >main{
      
        background-color: #000A0F
      
      
    }
    
    .buttondish{
      background-color: #000A0F;
      margin: 0;
      padding: 1.6rem 5.6rem;



    
  }
   
  }



`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15.5rem;
  
  
 
    > img{
      width: 39.0rem;
      margin-right: 4.7rem ;
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

  #user {
    display: flex;
    align-items: center;
    margin-top: 4.8rem;

    button {
      margin-top: 0;
      width: 16.2rem;
    }
    
  }

  @media (max-width: 768px) {
   
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    
  
    > img{
      width: 26.3rem;
      margin: 0;
     
    }

    >div{
    width: 31rem;
    
    text-align: center;
    h1{
      font-size: 2.4rem;
    
    }
  
    p{
      font-size: 1.6rem;
    
    }
  
    button{
      width: 31rem;
     margin-bottom: 4.9rem;
  }
 
}

#user {

    button {
     margin: 0;
      width: 16.2rem;
    }
    
  }
  }

  
`;





