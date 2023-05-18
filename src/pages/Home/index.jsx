
import { Container, Content, Search } from "./styles";


import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"


export function Home() {
 
  
  return (
    <Container>

     
      <Header />

      <Search>

        <img src="" alt="" />

        <div>
          <h1> Sabores inigualáveis </h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>

        </div>
      </Search>
      <Content>

        
      

      <Section title="Refeições"></Section>
      <Section title="Sobremesas"></Section>
      <Section title="Bebidas"></Section>

      
      </Content>

     
        <Footer></Footer>
      

     
      
    </Container>
  )
}