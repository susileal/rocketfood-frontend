import { useState, useEffect, useRef } from "react";
import { Container, Content, Search } from "./styles";
import scone from "../../assets/scone.png";

import { motion } from "framer-motion"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"


export function Home() {

  const carousel = useRef()

  const [searchTerm, setSearchTerm] = useState("");
  const [dishes, setDishes] = useState([]);
  const [width, setWidth] = useState(0);
 
  function handleHeaderChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?searchTerm=${searchTerm}`);
      setDishes(response.data)
    }
    fetchDishes();
  },[searchTerm])

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])


  return (
    <Container>

      

     
      <Header onHeaderChange={handleHeaderChange}/>

      <Search>

        <motion.img 
        initial={{y: 100}}
        animate={{y: 0}}  
        transition={{duration: 0.9}}
        src={scone} alt="chuva de bolinhos" />

        <div>
          <h1> Sabores inigualáveis </h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>

        </div>
      </Search>

      <Content>

        
      

      <Section title="Refeições">
        <motion.div className="carousel" whileTap={{cursor:"grabbing"}}>
          <motion.div 
            className="inner"
            drag="x"
            dragConstraints={{right: 0, left: -width}}
            
          >
            { 
              
              dishes
              .filter(dish => (dish.category_id === 1))
              .map(dish => (    
                  <Card 
                    key={String(dish.id)}
                    data={dish}                   
                  />

                ))
            }

          </motion.div>

        </motion.div>

      </Section>
      <Section title="Sobremesas">
        <motion.div className="carousel" whileTap={{cursor:"grabbing"}}>
          <motion.div 
            className="inner"
            drag="x"
          >
            { 
              dishes
              .filter(dish => (dish.category_id === 2))
              .map(dish => (
                
                  <Card 
                    key={String(dish.id)}
                    data={dish}                 
                  />

                ))
            }

          </motion.div>

        </motion.div>
      </Section>
      <Section title="Bebidas">
      <motion.div className="carousel" whileTap={{cursor:"grabbing"}}>
          <motion.div 
            className="inner"
            drag="x"
          >
            { 
              dishes
              .filter(dish => (dish.category_id === 3))
              .map(dish => (
                
                  <Card 
                    key={String(dish.id)}
                    data={dish}
                    
                   
                  />

                ))
            }

          </motion.div>

        </motion.div>

      </Section>

      
      </Content>

     
        <Footer></Footer>
      

     
      
    </Container>
  )
}