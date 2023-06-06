import { Container, Content} from "./styles.js"
import { Link } from "react-router-dom";

import { IoIosArrowBack} from 'react-icons/io';
import dish from "../../assets/dish.png";


import { HeaderUsers } from "../../components/HeaderUsers"

import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { InputInclude } from "../../components/InputInclude"

import { Footer } from "../../components/Footer/index.jsx"


export function DishUsers(){
 
  return(
    <Container>

      <HeaderUsers/>

      <main>
        <Content>
          <header>
            <Link to="/">
              <ButtonText title="voltar" isFont> <IoIosArrowBack/></ButtonText>
            </Link>
            <img src={dish} alt="imagem de prato" />
          </header>
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


            <div id="user">
              <InputInclude value="01"></InputInclude>
              <Button title="incluir - R$25,00"> </Button>
            </div>

          </div>

      </Content>
    </main>

    
        <Footer></Footer>
   
      
    </Container>
  )
} 
