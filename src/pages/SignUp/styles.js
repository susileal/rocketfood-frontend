import styled from "styled-components";


export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
 

   @media (max-width: 768px) {
    main{

      margin: 0;
      background-color: #000A0F;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15.8rem;
      >form{
       width: 42.8rem;
       background-color: #000A0F;
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

