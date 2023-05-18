import { Container } from "./styles";

import {BsHexagonFill } from 'react-icons/bs';

// isActive - esta propriedade vai deixar ativa ou não o link
// isActive = false - se nã passar o valor isActive no botão ele irá considerar falso

export function Logo({ title, isActive = false, ...rest}) {

  return (
    <Container 
      {...rest}
      isActive={isActive}
    >
       <BsHexagonFill/>

      <div>
        <strong>{title}</strong>
        <span >admin</span>
      </div>
       
    </Container>
  );
}