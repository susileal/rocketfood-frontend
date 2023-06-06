
import { FiPlus , FiMinus} from "react-icons/fi"

import { Container } from "./styles";

export function InputInclude({ value, onClick, ...rest }) {

  return (
    <Container>

      <button 
        type="button"
        onClick={onClick}
        className="button-delete"
        >
          <FiMinus/>
    
      </button>


      <input 
        type="number"
        value={value}
        {...rest}>

      </input>

      <button 
        type="button"
        onClick={onClick}
        className="button-add"
        >
          <FiPlus/>
    
      </button>
      

     

    </Container>
  );
}