import React from 'react'

const NotFound = () => {
  return (
    <div className="h-[100vh] w-full bg-black">
      <div className="notfound text-white flex justify-center items-center flex-col h-[100vh]">
        <div className="notfound-message">
          <h1 className="text-[10rem] text-center text-red-600">404</h1>
          <p>Parece que você chegou em um link que não existe!</p>
        </div>
        <p className="text-2xl">
          Volte para o{' '}
          <span className="text-red-400">
            <a href="/">Início</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default NotFound
