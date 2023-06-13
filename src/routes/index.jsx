import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth"


// importando as rotas

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AppRoutesUsers } from "./app.routes.users";




export function Routes(){

  const {user} = useAuth();

  return (
    <BrowserRouter>
     {user ? <AppRoutes/> : <AuthRoutes/> }
    </BrowserRouter>
  )
}


