import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_400};
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