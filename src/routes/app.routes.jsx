import {Routes, Route} from "react-router-dom"

import { Dish } from "../pages/Dish"
import { Home } from "../pages/Home"
import { AddDish } from "../pages/AddDish"
import { EditDish } from "../pages/EditDish"
import { Profile } from "../pages/Profile"

// na barra / vai ser renderizado a Home

export function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/addDish" element={<AddDish/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/editDish/:id" element={<EditDish/>}/>
      <Route path="/dish/:id" element={<Dish/>}/>

    </Routes>
  )
}