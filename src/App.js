import React, { useEffect } from 'react'
import './index.css'
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './routes/NotFound'
import LoginForm from './routes/LoginForm'
import Login from './routes/Login'
import SigninForm from './routes/SigninForm'
import Sap from './routes/Sap'

function App() {
  useEffect(() => {
    document.title = 'Ativus Treinamentos'
  })

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sap" element={<Sap />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logintest" element={<Login />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
