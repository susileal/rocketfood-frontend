import styled from "styled-components";



export const Container = styled.div`
   

   main{

     display: flex;
     align-items: center;
     justify-content: center;
   }
 

   @media (max-width: 768px) {
    main{

      margin: 0;
      background-color: #000A0F;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     
      
      header{
        width: 42.8rem;
        padding: 15.8rem 6.5rem;
        
      }
      >form{
        width: 42.8rem;
       background-color: #000A0F;
      
     }
    }
     

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



