import { IoIosArrowBack} from 'react-icons/io';
import { AiOutlineUpload } from 'react-icons/ai';
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"


import { Header } from "../../components/Header"
import { Textarea } from "../../components/Textarea"
import { SectionForm } from "../../components/SectionForm"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Ingredients } from "../../components/Ingredients"
import { Footer } from "../../components/Footer"

import { api } from "../../services/api"



import { Container, Form} from "./styles";

export function EditDish() {

  const [data, setData] = useState(null);
  const params = useParams();

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
    const response = await api.get(`/dishes/${params.id}`);
    setData(response.data)
    }

    fetchDish();
  },[])


  /*const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

 
  function handleAddIngredients(){
    setIngredients( prevState => [...prevState, newIngredients]);
    setNewIngredients("");
  }

  function handleRemoveIngredients(deleted){
    setIngredients( prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewDish(){

    if(!name){
      return alert("Digite o nome do prato");
    }

    if(!price){
      return alert("Digite o preço do prato");
    }
  
    if (newIngredients) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar, ou deixe o campo vazio.")
    }

    if(!category){
      return alert("Selecione a categoria do prato.");
    }

    
    await api.post("/dishes", {
      name,
      category_id: category,
      description,
      ingredients,
      price

    
    });

    alert("Prato criado com sucesso");
   
    }*/

   
  return (
    <Container >
      <Header/>

    {
    <main>
        
        <Link to="/">
        
        <ButtonText title="voltar" isFont> <IoIosArrowBack/></ButtonText>
        </Link>
       
        <h1> Editar prato </h1>
      
          
      <Form>
        
        <div id="#section_1">
          
          <SectionForm title="Imagem do prato"> 
          
            <Button title="Selecione imagem"> <AiOutlineUpload/> </Button>
          </SectionForm>
          <SectionForm title="Nome" > 
          
            <Input 
              id="name"
              placeholder="Ex.: Salada Ceasar"
            >
            
              {data.name}
            </Input>
              
          </SectionForm>
          <SectionForm title="Categoria" for="categoria"> 
            <select name="categoria" id="category">
              <option value="dish">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
           
          </SectionForm>

        </div>

        <div id='#section_2'>
        <SectionForm title="Ingredientes"> 
          
          <div className='ingredients'>

            <Ingredients 
              value="Pão Naan"
              
            />

        
            <Ingredients 
            placeholder="Adicionar" 
            isNew 
            />

           
          </div>
        
          
        </SectionForm>

        <SectionForm title="Preços"> 
          <Input
              id="price"
              placeholder="R$0,00"
              type="number"
          >
            {data.price}
          
          </Input>
           
          
        </SectionForm>

        </div>
     
        <SectionForm title="Descrição"> 
          <Textarea
            placeholder="A Salada César é uma opção refrescante para o verão."
          
          >
            {data.description}

          </Textarea>
        
        </SectionForm>

     
     
      


      <section id='buttonEdit'>

        <Button title="Excluir prato" isDelete id="buttonDelete" />

        <Link to="/">
          <Button title="Salvar alterações" isSave id="buttonSave"  />
        
        </Link>
      </section>
      

      </Form>
    </main>

    }
  

    <Footer></Footer>
    </Container>
  )
}