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

    #headerProfile{
      margin: 1rem 15rem;
    }
  }

  @media (max-width: 768px) {
    
    
    >main{
      margin: 0;
      padding: 0;
      background-color: #000A0F;
     
    
      #headerProfile{
        margin: 2.4rem 2.4rem 0;
        
      }

      >form{
        width: 36.4rem;
       background-color: #000A0F;
       margin-top: 2rem;
       padding: 2rem;
      
      
     }
    }
    
   

  }

  

  
  
`;

export const Form = styled.form`
  max-width: 47.6rem;
  height: 68.1rem;
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




