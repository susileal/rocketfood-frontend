import { Container} from "./styles";



import { Logo } from "../../components/Logo"  

export function Footer(){
  

  return(
    <Container>


      <Logo title="food explorer" isActive></Logo>
      <span> © 2023 - Todos os direitos reservados. </span>
    </Container>
  )

}