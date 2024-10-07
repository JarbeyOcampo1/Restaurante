import { useState } from "react"

function ResForm ({onSubmit}) {

    const [nombre,setNombre] = useState ('')
    const [n_persona,setN_persona] = useState ('')
    const [fecha,setFecha] = useState ('')
    const [estado,setEstado] = useState ('')

    const handleNombreChange = (event) => {
        setNombre(event.target.value)
    }
    const handleN_personaChange = (event) => {
        setN_persona(event.target.value)
    }
    const handleFechaChange = (event) => {
        setFecha(event.target.value)
    }
    const handleEstadoChange = (event) => {
        setEstado(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit({nombre,n_persona,fecha,estado})
        setNombre('')
        setN_persona('')
        setFecha('')
        setEstado('')
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="nombre" value={nombre} onChange={handleNombreChange} required/>
            <input type="text"  placeholder="n_persona" value={n_persona} onChange={handleN_personaChange} required/>
            <input type="text"  placeholder="fecha" value={fecha} onChange={handleFechaChange} required/>
            <input type="text"  placeholder="estado" value={estado} onChange={handleEstadoChange} required/>
            <button type="submit"> Agregar </button>
        </form>
    )
}

export default ResForm