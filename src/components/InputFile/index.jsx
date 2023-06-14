
import { AiOutlineUpload } from 'react-icons/ai';

import { Container } from "./styles";

export function InputFile({ title, ...rest }) {

  return (
    <Container {...rest}>

      <label htmlFor='image'>
      
        <AiOutlineUpload/>

        {title}

        <input 
          id="image"
          type="file"
          
          />

      </label>

      

    
      
      

     

    </Container>
  );
}