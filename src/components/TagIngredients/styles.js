import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  margin-right: 1.2rem;  
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

  @media (max-width: 768px) {
   
    margin-right: 3.2rem;
  
  }
`;