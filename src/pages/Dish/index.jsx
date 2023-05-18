import { Container, Content, Profile } from "./styles.js"

import { IoIosArrowBack} from 'react-icons/io';


import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"

import { Footer } from "../../components/Footer"


export function Dish(){
 
  return(
    <Container>

      <Header></Header>

      <main>
        <Content>


          <Profile>
                    <a to='/'>
                      <IoIosArrowBack/> voltar
                    </a>

                    <img src="../../assets/dish.png" alt="prato" />
          </Profile>

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

      </Content>
    </main>

    
        <Footer></Footer>
   
      
    </Container>
  )
} 
