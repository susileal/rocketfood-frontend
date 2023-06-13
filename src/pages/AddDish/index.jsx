import { IoIosArrowBack} from 'react-icons/io';
import { AiOutlineUpload } from 'react-icons/ai';
import { Link } from "react-router-dom";

import { useState } from "react";

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

export function AddDish() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");


  

  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");



  // prevState - dentro dele tem todo o conteúdo atual antes dele ser atualizado
  // filter - retorna uma nova lista baseado no que for aplicado
 
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
   
    }
  
  return (
    <Container>
      <Header/>
  
    <main>
       
       <Link to="/">
       
        <ButtonText title="voltar" isFont> <IoIosArrowBack/></ButtonText>
       </Link>
        <h1> Adicionar prato </h1>
      
          
      <Form>
        
        <div id="#section_1">
          
          <SectionForm title="Imagem do prato"> 
          
            <Button title="Selecione imagem"> <AiOutlineUpload/> </Button>
          </SectionForm>
          <SectionForm title="Nome" > 
            <Input  
              id="name"
              placeholder="Ex.: Salada Ceasar"
              onChange={e =>  setName(e.target.value)}
            />
          </SectionForm>
          <SectionForm title="Categoria" for="category"> 
            <select name="categoria" id="category" onChange={e =>  setCategory(e.target.value)}>
              <option value="">Selecione</option>
              <option value="1">Refeição</option>
              <option value="2">Sobremesa</option>
              <option value="3">Bebida</option>
            </select>
           
          </SectionForm>

        </div>

        <div id='#section_2'>
        <SectionForm title="Ingredientes"> 
        <div className='ingredients'>
        {
            ingredients.map((ingredient, index) => (
              <Ingredients
              key={String(index)}
              value={ingredient}
              onClick={( ) => handleRemoveIngredients(ingredient)}
              />
              
            ))
          }
            <Ingredients 
            isNew 
            placeholder="Adicionar"
            value={newIngredients}
            onChange={e => setNewIngredients(e.target.value)}
            onClick={handleAddIngredients}
            
            />
          

          </div>
        
          
        </SectionForm>

        <SectionForm title="Preços"> 
          <Input  
              id="price"
              placeholder="R$0,00"
              type="number"
              onChange={e =>  setPrice(e.target.value)}
            />
          
        </SectionForm>

        </div>
     
        <SectionForm title="Descrição"> 
          <Textarea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e =>  setDescription(e.target.value)}
          />
        </SectionForm>


      <section>

        <Link to="/">
          <Button title="Salvar alterações" 
          onClick={handleNewDish}
          />
        
        </Link>


      </section>
        
      

      </Form>
    </main>

    <Footer></Footer>
    </Container>
  )
}