import React, { useState } from 'react'
import axios from 'axios'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Logo from '../assets/Ativus.png'

const SigninForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const url = 'http://localhost/EducAtivus/src/api/usuarioCadastro.php'

  const handleSubmit = e => {
    e.preventDefault()
    if (email.length === 0) {
      alert('O email não pode ficar em branco.')
    } else if (password.length === 0) {
      alert('A senha não pode ficar em branco.')
    } else if (confirmPassword.length === 0) {
      alert('Confirme a senha.')
    } else {
      if (password === confirmPassword) {
        let fData = new FormData()

        fData.append('email', email)
        fData.append('password', password)

        axios.post(url, fData).catch(error => alert(error))
        console.log('chegou')
      }
    }
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="w-auto h-30 mx-auto" src={Logo} alt="Logo Ativus" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Cadastre-se
          </h2>
        </div>
        <form className="mt-8 space-y-1" method="POST" onSubmit={handleSubmit}>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            id="password"
            name="user_password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />

          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="Confirmar Senha"
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button
            name="btn_cadastrar"
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-red-100 group-hover:text-red-900"
                aria-hidden="true"
              />
            </span>
            Criar Conta
          </button>
          <span className="error-message" name="error-message"></span>
        </form>
      </div>
    </div>
  )
}

export default SigninForm
