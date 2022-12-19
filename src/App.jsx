import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddProducts from './Components/AddProducts'
import Login from './Components/Login'
import ProductLst from './Components/ProductList'
import Register from './Components/Register'
import UpdateProduct from './Components/UpdateProducts'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/add" element={<AddProducts />}>
            <Route path="/add" element={<AddProducts />} />
          </Route>
          <Route path="/list" element={<ProductLst/>}>
            <Route path="/list" element={<AddProducts />} />
          </Route>
          <Route path="/update" element={<UpdateProduct />}>
            <Route path="/update/:id" element={<UpdateProduct />} />
          </Route>
          <Route path="/register" element={<Register />}>
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
