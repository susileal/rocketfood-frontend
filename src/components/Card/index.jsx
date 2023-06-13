
import { Container } from "./styles";
import { Link } from "react-router-dom";

import { ButtonText } from "../ButtonText";

import { BiPencil } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';



import dish from "../../assets/dish.png";


export function Card({ data, ...rest}) {

  return (
    <Container {...rest}>
       <section>
        
        <Link to="/editDish">
        
          <ButtonText> <BiPencil/> </ButtonText>
        </Link>

       </section>

      
        <Link to="/dish/:id">
          <img src={dish} alt="imagem de prato" />
        </Link>
          <h3> {data.name}<IoIosArrowForward/> </h3>
          <p> {data.description} </p>
          <span> R$ {data.price} </span>

       

       

      
       
    </Container>
  );
}