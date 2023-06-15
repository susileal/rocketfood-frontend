import styled from "styled-components";


export const Container = styled.button`

    display: flex;
    align-items: center;
    background: none;
    color: ${({ theme}) => theme.COLORS.WHITE};
    border: none;
    font-size: ${({ isFont}) => isFont ? "2.4rem" : "1.4rem"};
    font-weight: 500;
   
  
    

  
 
`;

