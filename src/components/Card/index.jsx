
import { Container } from "./styles";
import { Link } from "react-router-dom";

import { ButtonText } from "../ButtonText";
import { Button } from "../Button";
import { InputInclude } from "../InputInclude";

import { BiPencil } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

import { useAuth } from "../../hooks/auth"

import dish from "../../assets/dish.png";


export function Card({ data, ...rest}) {

  const {user} = useAuth()

  return (
    <Container {...rest}>
       <section>
        
       {user.is_admin ? (
       <Link to={`/editDish/${data.id}`}>
          <ButtonText> <BiPencil/> </ButtonText>
      </Link>
    ):(
      <ButtonText> <AiOutlineHeart/> </ButtonText> 
    )}
       </section>

      
        <Link to={`/dish/${data.id}`}>
          <img src={dish} alt="imagem de prato" />
          <h3> {data.name}<IoIosArrowForward/> </h3>
          <p> {data.description} </p>
          <span> R$ {data.price} </span>
          
          {user.is_admin ? (<></>
          ):(
      
            <div class="user">
        
            <InputInclude value="01"/>
            <Button title="incluir"></Button>
    
            </div>
    )}
        </Link>
    </Container>
  );
}