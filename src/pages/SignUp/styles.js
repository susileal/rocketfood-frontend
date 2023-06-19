import styled from "styled-components";


export const Container = styled.div`

>main{

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
      padding-top: 12rem;
      
      header{
        width: 42.8rem;
        background-color: #000A0F;
        padding: 0 6.5rem;
      
        
      }
      >form{
        width: 42.8rem;
       background-color: #000A0F;
       margin-top: 4rem;
      
      
     }
    }
     

  }

`;

export const Form = styled.form`
  width: 47.6rem;
  height: 62.1rem;
  margin: 9.0rem 10.8rem 11.2rem;
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

  > button{
    margin: 3.2rem 0;
  }



`;

