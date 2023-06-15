import styled from "styled-components";


export const Container = styled.div`
  width: 22.9rem;
  height: 4.8rem;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 0.5rem;
  position: relative;
  font-size: 1.4rem;

  >label{
    width: 19rem;
    height: 2.4rem;
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 1.2rem;
    bottom: 1.2rem;
    cursor: pointer;

    input{
      display: none;
    }

    svg{
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 0.8rem;

    }

  }
  @media (max-width: 768px) {
   
   width: 36.4rem;


}
  
  
  
 


`;