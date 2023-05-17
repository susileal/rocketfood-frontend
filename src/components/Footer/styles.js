import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;

  height: 7.7rem;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  


  >span{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    padding: 2.7rem 12.3rem 0 0;
  }
  `;

export const Profile = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
  >svg{
    font-size: 3.0rem;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    margin-left: 12.3rem;
  }
 

  > div{
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;
    text-align: right;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-left: 1rem;
   
    span{
      font-size: 2.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_200};
      font-weight: 700;
      font-family: 'Roboto', sans-serif; 
    }
  }
`;










