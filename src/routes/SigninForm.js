import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Logo from '../assets/Ativus.png'

const SigninForm = () => {
  const [user, setUser] = useState({
    email: '',
    user_password: '',
    passwordConfirm: ''
  })
  const valorInput = e => setUser({ ...user, [e.target.name]: e.target.value })

  const cadUsuario = async e => {
    e.preventDefault()

    if (user.user_password !== user.passwordConfirm) {
      console.log('As senhas diferem')
      console.log(user.email)
    } else {
      console.log('As senhas são iguais')
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
        <form className="mt-8 space-y-1" method="POST" onSubmit={cadUsuario}>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="E-mail"
            onChange={valorInput}
          />

          <input
            id="password"
            name="user_password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="Senha"
            onChange={valorInput}
          />

          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="Confirmar Senha"
            onChange={valorInput}
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
        </form>
      </div>
    </div>
  )
}

export default SigninForm
