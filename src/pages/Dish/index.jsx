import { Container, Content} from "./styles.js"

import { IoIosArrowBack} from 'react-icons/io';
import dish from "../../assets/dish.png";


import { Header } from "../../components/Header"

import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"

import { Footer } from "../../components/Footer"


export function Dish(){
 
  return(
    <Container>

      <Header/>

      <main>
          <a to='/'>
            <IoIosArrowBack/> voltar
          </a>
        <Content>
          <img src={dish} alt="imagem de prato" />
          <div>
            <h1> Salada Ravanello </h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            
            <section>
                <Tag title="alface"/>
                <Tag title="cebola"/>
                <Tag title="pão naan"/>
                <Tag title="pepino"/>
                <Tag title="rabanete"/>
                <Tag title="tomate"/>

            </section>

            <Button title="Editar prato"></Button>

          </div>

      </Content>
    </main>

    
        <Footer></Footer>
   
      
    </Container>
  )
} 
