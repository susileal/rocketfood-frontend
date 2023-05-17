import { Container, Profile, Search, Logout} from "./styles";
import { FiSearch, FiLogOut} from 'react-icons/fi';

import {BsHexagonFill } from 'react-icons/bs';

import { Button } from "../../components/Button"
import { Input } from '../Input';




export function Header(){
  

  return(
    <Container>


      <Profile to="/profile" >
       <BsHexagonFill/>

      <div>
        <strong>food explorer</strong>
        <span>admin</span>
      </div>
      </Profile>
  
    <Search>
      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={FiSearch}
       
      />

    </Search>
   
  
    <Button title="Novo prato"></Button>
   
    <Logout > <FiLogOut/> </Logout> 
     
    </Container>
  )

}