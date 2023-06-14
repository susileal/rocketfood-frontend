import { IoIosArrowBack} from 'react-icons/io';
import { Link, useNavigate} from "react-router-dom";

import { useState} from "react";


import { Header } from "../../components/Header"
import { Textarea } from "../../components/Textarea"
import { SectionForm } from "../../components/SectionForm"
import { Input } from "../../components/Input"
import { InputFile } from "../../components/InputFile"
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

  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState(null);

  const navigate = useNavigate()
  function handleBack(){
    navigate("/")
  }

  function handleChangeImage(event){
    const file = event.target.files[0];
    setImageFile(file);
    setImage(file.name);
  }

  
 
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

    const responseCreate = await api.post("/dishes", {
      name,
      category_id: category,
      description,
      ingredients,
      price,    
    });

    const dish_id = responseCreate.data.id

    if(imageFile){
      const fileUploadForm = new FormData();
      fileUploadForm.append("image", imageFile);

      await api.patch(`/dishes/${dish_id}/image`, fileUploadForm);
    }

    alert("Prato criado com sucesso");
    navigate("/")
   
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
              <InputFile
                title={image ? image :"Selecione a imagem"}
                onChange={handleChangeImage}
              > 
               
              </InputFile>
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

       
          <Button title="Salvar alterações" 
          onClick={handleNewDish}
          />
        
       


      </section>

        
      

      </Form>
   
    </main>

    <Footer></Footer>
    </Container>
  )
}