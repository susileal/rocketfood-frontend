import { Container, Profile } from "./styles.js"

import { FiArrowLeft} from 'react-icons/fi';


import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"

import { Footer } from "../../components/Footer"


export function Dish(){
 
  return(
    <Container>

      <Header></Header>

      <a to='/'>
        <FiArrowLeft/> Voltar
      </a>
      <Profile>

        <img src="../../assets/dish.png" alt="prato" />

        <div>
          <h1> Salada Ravanello </h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
         
         <Section>
         <Tag title="alface"/>
         <Tag title="cebola"/>
         <Tag title="pão naan"/>
         <Tag title="pepino"/>
         <Tag title="rabanete"/>
         <Tag title="tomate"/>



         </Section>
            
          <Button title="Editar prato"></Button>
         
        </div>

      </Profile>
     

      <footer>

            <Footer></Footer>
      </footer>

      
    </Container>
  )
} 
