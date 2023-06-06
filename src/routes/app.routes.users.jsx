import {Routes, Route} from "react-router-dom"

import { DishUsers } from "../pages/DishUsers"
import { Profile } from "../pages/Profile"
import { HomeUsers } from "../pages/HomeUsers"

// na barra / vai ser renderizado a Home

export function AppRoutesUsers() {
  return (
    <Routes>

      <Route path="/" element={<HomeUsers/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/dishUsers/:id" element={<DishUsers/>}/>

    </Routes>
  )
}