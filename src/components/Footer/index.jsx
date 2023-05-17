import { Container, Profile} from "./styles";


import {BsHexagonFill } from 'react-icons/bs';





export function Footer(){
  

  return(
    <Container>


      <Profile to="/profile" >
       <BsHexagonFill/>

      <div>
        <span>food explorer</span>
        
      </div>
      </Profile>
      
      <span> © 2023 - Todos os direitos reservados. </span>
      
  
     
      
        


    </Container>
  )

}