import { useState, useEffect, useRef } from "react";

import { Container, Content} from "./styles";
import scone from "../../assets/scone.png";


import { motion } from "framer-motion"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"


export function Home() {

  const carouselRefeicao = useRef()
  const carouselBebida = useRef()
  const carouselSobremesa = useRef()

  const [searchTerm, setSearchTerm] = useState("");
  const [dishes, setDishes] = useState([]);

  const [widthRefeicao, setWidthRefeicao] = useState(0);
  const [widthSobremesa, setWidthSobremesa] = useState(0);
  const [widthBebida, setWidthBebida] = useState(0);
 
  function handleSearchTermChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?searchTerm=${searchTerm}`);
      setDishes(response.data)
      setWidthRefeicao(210 * (getQuantidade(response.data, 1) - 1))
      setWidthSobremesa(210 * (getQuantidade(response.data,2) - 1))
      setWidthBebida(210 * (getQuantidade(response.data,3) - 1))
    }
    fetchDishes();
  },[searchTerm])

  function getQuantidade(data, category_id){
    if(data){
      return data.filter(dish => (dish.category_id === category_id)).length
    }
  }

 
  return (
    <Container> 

      

     
      <Header onSearchTermChange={handleSearchTermChange}/>

      <main>

      <Content>
      <div id="home"> 

        <motion.img 
        initial={{y: 100}}
        animate={{y: 0}}  
        transition={{duration: 0.9}}
        src={scone} alt="chuva de bolinhos" />

        <div>
          <h1> Sabores inigualáveis </h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>

        </div>
      </div>

      <Section title="Refeições">
        <motion.div ref={carouselRefeicao} className="carousel" whileTap={{cursor:"grabbing"}}>
          <motion.div 
            className="inner"
            drag="x"
            dragConstraints={{right: 0, left: -widthRefeicao}}
           
          >
            { 
              
              dishes
              .filter(dish => (dish.category_id === 1))
              .map(dish => (    
                  <Card className="card"
                    key={String(dish.id)}
                    data={dish}                   
                  />

                ))
            }

          </motion.div>

        </motion.div>

      </Section>
      <Section title="Sobremesas">
        <motion.div ref={carouselSobremesa} className="carousel" whileTap={{cursor:"grabbing"}}>
          <motion.div 
            className="inner"
            drag="x"
            dragConstraints={{right: 0, left: -widthSobremesa}}
          >
            { 
              dishes
              .filter(dish => (dish.category_id === 2))
              .map(dish => (
                
                  <Card className="card"
                    key={String(dish.id)}
                    data={dish}                 
                  />

                ))
            }

          </motion.div>

        </motion.div>
      </Section>
      
      <Section title="Bebidas">
      <motion.div ref={carouselBebida} className="carousel" whileTap={{cursor:"grabbing"}}>
          <motion.div 
            className="inner"
            drag="x"
            dragConstraints={{right: 0, left: -widthBebida}}
          >
            { 
              dishes
              .filter(dish => (dish.category_id === 3))
              .map(dish => (
                
                  <Card className="card"
                    key={String(dish.id)}
                    data={dish}
                    
                   
                  />

                ))
            }

          </motion.div>

        </motion.div>

      </Section>

      
      </Content>

      </main>

     
        <Footer></Footer>
      

     
      
    </Container>
  )
}