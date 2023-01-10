import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="border-t border-slate-70">
      <div className="flex col justify-evenly p-5 bg-slate-100 pb-8">
        <div>
          <h3 className="text-2xl">Mapa do site</h3>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sap">Treinamentos SAP</Link>
            </li>
            <li>
              <Link to="/ativuscargas">Treinamentos Ativus Cargas</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl">Administração do Site</h3>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-slate-100">
        Copyright © 2022 Todos os Direitos Reservados.
      </div>
    </section>
  )
}

export default Footer
