import styled from "styled-components";

//  resize a pessoa segura e aumenta o tamanho da caixa
export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
 
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
  color: ${({ theme}) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 1.4rem;
  border-radius: 0.8rem;
  padding: 1.4rem;

  &:placeholder{
      color: ${({ theme}) => theme.COLORS.GRAY_100};
      font-size: 1.6rem;
    }
 
`;