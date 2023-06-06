import { Container } from "./styles";
import { Link } from "react-router-dom";

import { ButtonText } from "../ButtonText";
import { Button } from "../Button";
import { BiPencil } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';

import dish from "../../assets/dish.png";


export function Card({ title, ...rest}) {

  return (
    <Container {...rest}>
       <section>
        
        <Link to="/editDish">
        
          <ButtonText> <BiPencil/> </ButtonText>
        </Link>

       </section>
        <Link to="/dish/:id">
        
        <img src={dish} alt="imagem de prato" />
        <h3> Salada Ravanello <IoIosArrowForward/> </h3>
        <p> Rabanetes, folhas verdes e molho agridoce salpicados com gergelim </p>
        <span> R$ 49,97 </span>
        </Link>

      
       
    </Container>
  );
}