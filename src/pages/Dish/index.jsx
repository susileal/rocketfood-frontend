import { Container, Content} from "./styles.js"
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom"

import { IoIosArrowBack} from 'react-icons/io';
import dish from "../../assets/dish.png";

import { Header } from "../../components/Header"



import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"


export function Dish(){

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const params = useParams();

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1);
  }

  function handleHeaderChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${searchTerm}`);
      setDishes(response.data)
    }
    fetchDishes();
  },[searchTerm])

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
        <Content>
          <header>
           
              <ButtonText 
                title="voltar" 
                isFont 
                onClick={handleBack}
              > 
              <IoIosArrowBack/>
              </ButtonText>
      
            <img src={dish} alt="imagem de prato" />
          </header>
          <div>
            <h1> {data.name} </h1>
            <p>{data.description}</p>
            
            { 
              data.ingredients &&
              <section>
                { 
                  data.ingredients.map( ingredient => (
                  <Tag
                    key={String(ingredient.id)}
                    title={ingredient.name}
                  />
                  ))
                }
              </section>
            }
            
            <Link to="/editDish">
              <Button title="Editar prato" ></Button>
            </Link>

          </div>

      </Content>
      </main>
    }


    
        <Footer></Footer>
   
      
    </Container>
  )
} 
