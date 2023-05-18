import styled from "styled-components";


export const Container = styled.button`

    display: flex;
    align-items: center;
    background: none;
    color: ${({ theme}) => theme.COLORS.WHITE};
    border: none;
    font-size: 1.4rem; 
    font-weight: 500;
    line-height: 2.4rem;


  .star{
    margin-right: 8px;
  }
 
`;

