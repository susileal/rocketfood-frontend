import { Container } from "./styles";

import {BsHexagonFill } from 'react-icons/bs';

// isActive - esta propriedade vai deixar ativa ou não o link
// isActive = false - se nã passar o valor isActive no botão ele irá considerar falso

export function Logo({ title, isActive = false, isFont = false, isFontHeader=false, isFontSvg=false, ...rest}) {

  return (
    <Container 
      {...rest}
      isActive={isActive}
      isFont={isFont}
      isFontHeader={isFontHeader}
      isFontSvg={isFontSvg}
     
    >
       <BsHexagonFill/>

      <strong>{title}</strong>
      
       
    </Container>
  );
}