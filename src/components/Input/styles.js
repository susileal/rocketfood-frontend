import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme}) => theme.COLORS.GRAY_300};

  border-radius: 0.5rem;
 
  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.4rem;
   
    color: ${({ theme}) => theme.COLORS.GRAY_100};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    background: transparent;
    border: 0;

    &:placeholder{
      color: ${({ theme}) => theme.COLORS.BACKGROUND_500};
     
    }
  }

  > svg{
    margin-left: 14.4rem;
  }
`;