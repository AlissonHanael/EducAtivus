import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const url = 'http://localhost/EducAtivus/src/api/usuarioCadastro.php'

  const handleSubmit = e => {
    e.preventDefault()
    if (email.length === 0) {
      alert('O email não pode ficar em branco.')
      return 0
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="confirmpassword">Password</label>
        <input
          required
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <input type="submit" id="entrar" value="Entrar" />
      </form>
    </div>
  )
}

export default Login
