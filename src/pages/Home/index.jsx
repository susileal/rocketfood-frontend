
import { Container, Content, Search } from "./styles";
import scone from "../../assets/scone.png";


import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"


export function Home() {
 
  
  return (
    <Container>

     
      <Header />

      <Search>

        <img src={scone} alt="chuva de bolinhos" />

        <div>
          <h1> Sabores inigualáveis </h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>

        </div>
      </Search>

      <Content>

        
      

      <Section title="Refeições">
        <Card></Card>
      </Section>
      <Section title="Sobremesas"></Section>
      <Section title="Bebidas"></Section>

      
      </Content>

     
        <Footer></Footer>
      

     
      
    </Container>
  )
}