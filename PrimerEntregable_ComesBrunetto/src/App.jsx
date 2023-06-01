import { useState } from 'react'

import './App.css'
import Card from './components/Card'


function App() {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [error, setError] = useState('')
  const [formularioReset, setFormularioReset] = useState(false)

  /* const [persona, setPersona] = useState({})*/

  const guardarPersona = (nombre, edad) => {
    setPersona({ nombre, edad })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!/^\S/.test(nombre)) {
      setError('El nombre no puede tener espacio en blanco al principio');
    } else if (nombre.length <= 2) {
      setError('El nombre debe tener al menos 3 caracteres');
    } else if (apellido.length <= 5) {
      setError('El apellido debe tener al menos 6 caracteres');
    } else {
      setError('');
      guardarPersona(nombre, apellido);
    }
  };

  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeApellido = e => {
    setApellido(e.target.value)
  }

  const handleReset = () => {
    setNombre('')
    setApellido('')
    setError('')
    setFormularioReset(true)
  }

  return (
    <>
      <div className='App'>

        <h1>Carga de Persona</h1>

        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            id='nombre'
            value={nombre}
            placeholder='Ingrese su nombre'
            onChange={onChangeNombre}
          />

          <label htmlFor='apellido'>Apellido</label>
          <input
            type='text'
            id='apellido'
            value={apellido}
            placeholder='Ingrese su apellido'
            onChange={onChangeApellido}
          />

          <button>Submit 📪</button>
          {error && <p>{error}</p>}

          <button type='button' onClick={handleReset}>Reset 🔁</button>

        </form>

        {(!error && nombre && apellido) && <Card nombre={nombre} apellido={apellido} />}


      </div>

    </>
  )
}

export default App
