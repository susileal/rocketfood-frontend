import { Container } from "./styles";
import { Link } from "react-router-dom";

import { ButtonText } from "../ButtonText";
import { Button } from "../Button";
import { InputInclude } from "../InputInclude";
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

import dish from "../../assets/dish.png";


export function CardUsers({ title, ...rest}) {

  return (
    <Container {...rest}>
       <section>
        
        
          <ButtonText> <AiOutlineHeart/> </ButtonText>
        

       </section>
        <Link to="/dishUsers/:id">
        
        <img src={dish} alt="imagem de prato" />
        <h3> Salada Ravanello <IoIosArrowForward/> </h3>
        <p> Rabanetes, folhas verdes e molho agridoce salpicados com gergelim </p>
        <span> R$ 49,97 </span>
        </Link>

       
      
     

      <div>
        
        <InputInclude value="01"/>
        <Button title="incluir"></Button>

      </div>
       
    </Container>
  );
}