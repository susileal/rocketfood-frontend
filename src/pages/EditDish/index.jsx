import { IoIosArrowBack} from 'react-icons/io';
import { AiOutlineUpload } from 'react-icons/ai';


import { Header } from "../../components/Header"
import { Textarea } from "../../components/Textarea"
import { SectionForm } from "../../components/SectionForm"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Ingredients } from "../../components/Ingredients"
import { Footer } from "../../components/Footer"



import { Container, Form} from "./styles";

export function EditDish() {

   
  return (
    <Container >
      <Header/>
  
    <main>
        
        <ButtonText title="voltar" isFont> <IoIosArrowBack/></ButtonText>
       
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
            />
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
            />
          
        </SectionForm>

        </div>
     
        <SectionForm title="Descrição"> 
          <Textarea 
            placeholder="A Salada César é uma opção refrescante para o verão."
          />
        </SectionForm>

     
     
      


      <section id='buttonEdit'>

        <Button title="Excluir prato" isDelete id="buttonDelete" />
        <Button title="Salvar alterações" isSave id="buttonSave"  />
      </section>
      

      </Form>
    </main>

    <Footer></Footer>
    </Container>
  )
}