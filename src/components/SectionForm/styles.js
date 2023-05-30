import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  
  > h3{
    padding: 3.2rem 0 1.6rem;
    text-align: left;
    color:  ${({theme}) => theme.COLORS.GRAY_300};
    font-size: 1.6rem;
    font-family: 'Roboto';
    font-weight: 400;
  }

`;