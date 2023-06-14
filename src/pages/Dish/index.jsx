import { Container, Content} from "./styles.js"
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom"

import { IoIosArrowBack} from 'react-icons/io';
import { motion } from "framer-motion"

import { Header } from "../../components/Header"

import {useAuth} from "../../hooks/auth.jsx"


import imagePlaceHolder from "../../assets/sem-imagem.png"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { TagIngredients } from "../../components/TagIngredients"
import { InputInclude } from "../../components/InputInclude"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"


export function Dish(){

  const {user} = useAuth()

  const [data, setData] = useState(null);
  const params = useParams();
  const imageURL = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceHolder
 

  useState
  const navigate = useNavigate()

  function handleBack(){
    navigate("/");
  }

  function handleHeaderChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    async function fetchDish() {
    const response = await api.get(`/dishes/${params.id}`);
    setData(response.data)
    }

    fetchDish();
  },[])

  


 
  return(
    <Container>

      <Header onHeaderChange={handleHeaderChange}/>
    
    {
      data && 
      <main>
          <header>
           
              <ButtonText 
                title="voltar" 
                isFont 
                onClick={handleBack}
              > 
              <IoIosArrowBack/>
              </ButtonText>
            </header>
        <Content>
          
            <motion.img 
               initial={{y: 100}}
               animate={{y: 0}}  
               transition={{duration: 0.9}}
              src={imageURL} alt="imagem de prato" />
          <div>
            <h1> {data.name} </h1>
            <p>{data.description}</p>
            
            { 
              data.ingredients &&
              <section>
                { 
                  data.ingredients.map( ingredient => (
                  <TagIngredients
                    key={String(ingredient.id)}
                    title={ingredient.name}
                  />
                  ))
                }
              </section>
            }
            {user.is_admin ? (
            <Link to={`/editDish/${data.id}`}>
              <Button title="Editar prato" ></Button>
            </Link>
            ):(
              <div id="user">
              <InputInclude value="01"></InputInclude>
              <Button title="incluir - R$25,00"> </Button>
            </div>
            )
            }
          </div>

      </Content>
      </main>
    }


    
        <Footer></Footer>
   
      
    </Container>
  )
} 
