import { IoIosArrowBack} from 'react-icons/io';
import { AiOutlineUpload } from 'react-icons/ai';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth"


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

  const { user } = useAuth();

  const [data, setData] = useState(null);
  const params = useParams();
  const dish_id = params.id;

  const navigate = useNavigate()
  function handleBack(){
    navigate("")
  }


  useEffect(() => {
    async function fetchDish() {
    const response = await api.get(`/dishes/${dish_id}`);
    setData(response.data)
    setFields(response.data)
    }

    fetchDish();
  },[dish_id])

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");

  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

 
  function setFields(data){
    setName(data.name)
    setPrice(data.price)
    setIngredients(data.ingredients.map(ingredient => ingredient.name))
    setDescription(data.description)
    setCategory(data.category_id)
  }

  function handleAddIngredients(){
    if(!newIngredients){
      return alert("Digite o nome do ingrediente");
    }
    setIngredients( prevState => [...prevState, newIngredients]);
    setNewIngredients("");
  }

  function handleRemoveIngredients(deleted){
    setIngredients( prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleRemoveDish(){
    const confirm = window.confirm(`Deseja realmente excluir o prato ${name}?`);
    if(confirm) {
      await api.delete(`/dishes/${dish_id}`);
      navigate("/")
    }
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

    
    await api.put(`/dishes/${dish_id}`, {
      name,
      category_id: category,
      description,
      ingredients,
      price

    
    });

    alert(`Prato ${name} editado com sucesso`);
    navigate("/")
   
    }
    
   
    if (!data) {
      return <div>Carregando...</div>;
    }

   
  return (
    <Container >
      
      <Header/>

    
    <main>
        
        <Link to="/">
        
        <ButtonText title="voltar" isFont> <IoIosArrowBack/></ButtonText>
        </Link>
       
        <h1> Editar prato </h1>
      
          
      <Form>
        
        <div id="#section_1">
          
          <SectionForm title="Imagem do prato"> 
          
            <Button title="Selecione imagem para alterá-la"> <AiOutlineUpload/> </Button>
          </SectionForm>
          <SectionForm title="Nome" > 
          
            <Input 
              id="name"
              placeholder="Ex.: Salada Ceasar"   
              value={name}   
              onChange={e =>  setName(e.target.value)}
            />
            
        
              
          </SectionForm>
          <SectionForm title="Categoria" for="categoria"> 
            <select name="categoria" id="category" 
            value={category}
            onChange={e =>  setCategory(e.target.value)} >
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
              value={price} 
              onChange={e =>  setPrice(e.target.value)}
          />
            
           
          
        </SectionForm>

        </div>
     
        <SectionForm title="Descrição"> 
          <Textarea
            placeholder="A Salada César é uma opção refrescante para o verão."
            value={description}
            onChange={e =>  setDescription(e.target.value)}
         />
            
        
        </SectionForm>

  

      <section id='buttonEdit'>

        <Button 
          title="Excluir prato" 
          isDelete 
          id="buttonDelete" 
          onClick={handleRemoveDish}
        />

        <Link to="/">
          <Button 
          title="Salvar alterações" 
          isSave 
          id="buttonSave"  
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