

import NmaeContect from "./Pages/NamesOfAllah"
import AdkharMenu from "./Pages/Adkhar/Adkhar"
import Home from "./Pages/Home"
import ListNameOfAllh from "./Pages/ListNamesOfAllah"
import ListContect from "./Pages/ListOfAdkhar"
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {

  return(
    <>
    <BrowserRouter basename='/M3any/'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/name/:id" element={<NmaeContect/>}/>
      <Route path="/Adkhar/" element={<AdkharMenu/>}/>
      <Route path="/Adkhar/:id" element={<ListContect/>}/>
      <Route path="/NamesOfAllah/" element={<ListNameOfAllh/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App

