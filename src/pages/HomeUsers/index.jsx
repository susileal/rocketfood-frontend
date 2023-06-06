
import { Container, Content, Search } from "./styles";
import scone from "../../assets/scone.png";


import { HeaderUsers } from "../../components/HeaderUsers"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { CardUsers } from "../../components/CardUsers"


export function HomeUsers() {
 
  
  return (
    <Container>

     
      <HeaderUsers />

      <Search>

        <img src={scone} alt="chuva de bolinhos" />

        <div>
          <h1> Sabores inigualáveis </h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>

        </div>
      </Search>

      <Content>

        
      

      <Section title="Refeições">
        <CardUsers></CardUsers>
      </Section>
      <Section title="Sobremesas"></Section>
      <Section title="Bebidas"></Section>

      
      </Content>

     
        <Footer></Footer>
      

     
      
    </Container>
  )
}