import styled from "styled-components";


export const Container = styled.button`

    display: flex;
    align-items: center;
    background: none;
    color: ${({ theme}) => theme.COLORS.WHITE};
    border: none;
    font-size: 20px; 

  .star{
    margin-right: 8px;
  }
 
`;

