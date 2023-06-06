import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
 
  
  
  background-color: ${({ theme, isDelete}) => isDelete ? theme.COLORS.BACKGROUND_200 : theme.COLORS.BACKGROUND_400};
  background-color: ${({ theme, isSave}) => isSave ? theme.COLORS.PINK : "none"};
  color:  ${({ theme }) => theme.COLORS.WHITE};

  height: 4.8rem;
  border: 0;
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
  font-weight: 500;


  &:disabled{
    opacity: 0.5;
  }

`;