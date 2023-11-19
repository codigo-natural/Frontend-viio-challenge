import { useState } from 'react'
import { authService } from '../services/authService'
import { useNavigate } from 'react-router-dom'

export const Register = ({ history }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async () => {
    try {
      await authService.register(name, email, password);
      navigate('/')
    } catch (error) {
      
    }
  }
  return (
    <div className='space-y-6 p-8 bg-slate-200 block max-w-xl'>
      <h1 className='text-center font-bold'>Register</h1>
      {/* Formulario Registro */}
      <div className='mb-6'>
        <label htmlFor="name" className=''>Name:</label>
        <input type="text" id="name" value={name} required className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email" className=''>Email:</label>
        <input type="email" id="email" value={email} required className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password" className=''>Password:</label>
        <input type="password" id="password" value={password} required className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' onChange={e => setPassword(e.target.value)} />
      </div>
      <button className='w-full px-5 py-2.5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800' onClick={handleRegister}>Registrar</button>
      {setError && <p>{error}</p>}
    </div>
  )
}
