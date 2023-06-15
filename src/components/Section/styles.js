import styled from "styled-components";

export const Container = styled.section`
  margin: 2.8rem 0;

  > h2{

    padding-bottom: 2.3rem;
    color:  ${({theme}) => theme.COLORS.WHITE_100};

    font-size: 3.2rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    
   
    margin: 2.8rem 0;

    h2{
      font-size: 2.4rem;
    }
  }

`;