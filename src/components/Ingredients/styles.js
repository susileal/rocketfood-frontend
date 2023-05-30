import styled from "styled-components";

// se é um novo item fica mais claro, se não fica mais escuro
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  margin-bottom: 0.8rem;
  border-radius: 0.8rem;
  padding-right: 1.6rem;
 

  > button{
    border: none;
    background: none;

  }

  .button-delete{
    color: ${({ theme}) => theme.COLORS.WHITE};
    font-size: 1.2rem;
  }

  .button-add{
    color: ${({ theme}) => theme.COLORS.GRAY_100};
    font-size: 1.2rem;
  }

  > input {
   
    height: 3.2rem;
    width: 11.8rem;

    padding: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: none;

    &:placeholder{
      color: ${({ theme}) => theme.COLORS.GRAY_300};
    }
    
  }


`;