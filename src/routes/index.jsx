import { BrowserRouter } from "react-router-dom";


// importando as rotas

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AppRoutesUsers } from "./app.routes.users";




export function Routes(){

  return (
    <BrowserRouter>
     <AuthRoutes/> 
    </BrowserRouter>
  )
}


