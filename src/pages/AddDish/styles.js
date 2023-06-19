import styled from "styled-components";

// overflow-y: scroll; - deixar o header fixo e rola só a main
//  overflow-y: auto; o scroll fica oculto e só aparece se o conteúdo não couber na tela 

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
    margin: 3.2rem auto;
   
    
    h1{
      font-size: 3.2rem;
      margin-top: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    

    >main{
      margin: 0;
      background-color: #000A0F;
      
     
      header{
        margin: 2.4rem 4rem;
      }
    }
    
   

  }

`;


export const Form = styled.form`

  max-width: 112.0rem;
  margin: 0 auto 11.6rem;


  > div:nth-child(1){
    display: flex;
    gap: 3.2rem;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      width: 22.9rem;
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
      color: ${({ theme}) => theme.COLORS.WHITE};

      svg{
        font-size: 2.4rem;
        margin-right: 0.8rem;

      }
    }

    #name{
      width: 46.3rem;
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
    }
    #category{
      width: 36.4rem;
      height: 4.8rem;
      border: none;
      border-radius: 0.5rem;
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
      padding: 1.4rem;
   
      color: ${({ theme}) => theme.COLORS.GRAY_100};
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      
  
    }

    
  }
  
  > div:nth-child(2){
    display: flex;
    gap: 3.2rem;
  
    #price {
      width: 25.1rem;
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
      color: ${({ theme}) => theme.COLORS.GRAY_100};
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
    }

    .ingredients{
      width: 83.7rem;
      min-height: 4.8rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
      border-radius: 0.8rem;
      padding: 0.4rem 0.8rem 0;
    
    }

  
    
  }

  >section{
    text-align: right;
    button{
      width: 17.2rem; 
      background: ${({ theme }) => theme.COLORS.PINK};
    }   
  }

  @media (max-width: 768px) {
    
    width: 36.4rem;
    
     > div:nth-child(1){
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     }

     > div:nth-child(2){
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #price {
      width: 36.4rem;
     
    }
    .ingredients{
      width: 36.4rem;
     
    }
     }

     >section{
   
    button{
      width: 36.4rem; 
     
    }   
  }
 
    
   

  }
  
  
`;







