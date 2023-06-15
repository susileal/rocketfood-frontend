import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.4rem;
  margin-right: 1.6rem;

 
  width: 10.0rem;
  height: 4.8rem;
  
  background-color: transparent;
 
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  

  > button{
    border: none;
    background: none;
    display: flex;

  }

  .button-delete{
    margin: 0 auto;
    color: ${({ theme}) => theme.COLORS.WHITE};
    font-size: 1.8rem;
    display: flex;
  }

  .button-add{
    margin: 0 auto;
    color: ${({ theme}) => theme.COLORS.WHITE};
    font-size: 1.8rem;
    
  }

  > input {
    width: 2.4rem;
    height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: none;
    font-size: 2.0rem;
    font-family: 'Roboto';
    
    
    &:placeholder{
      color: ${({ theme}) => theme.COLORS.WHITE};
   
      
    }
  }
  
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }

  @media (max-width: 768px) {
    height: 3.2rem;

   
    
    


  }


`;