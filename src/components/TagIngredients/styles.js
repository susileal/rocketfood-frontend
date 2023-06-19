import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  margin: 1.2rem 1.2rem 0 0;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
`;