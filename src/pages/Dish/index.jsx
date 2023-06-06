import { Container, Content} from "./styles.js"
import { Link } from "react-router-dom";

import { IoIosArrowBack} from 'react-icons/io';
import dish from "../../assets/dish.png";


import { Header } from "../../components/Header"

import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"


import { Footer } from "../../components/Footer"


export function Dish(){

  isadmin = user.is_admin
 
  return(
    <Container>

      <Header/>

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
            
            
            <Link to="/editDish">
              <Button title="Editar prato"></Button>
            </Link>

          </div>

      </Content>
    </main>

    
        <Footer></Footer>
   
      
    </Container>
  )
} 
