import { useState } from "react"
import FormPaciente from "../components/FormPaciente"
import ListaPacientes from "../components/ListaPacientes"

function Pacientes() {
  const [pacientes, setPacientes] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  return (
    <div>
      <h2>Cadastro de Pacientes</h2>

      <FormPaciente 
        pacientes={pacientes}
        setPacientes={setPacientes}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />

      <ListaPacientes 
        pacientes={pacientes}
        setPacientes={setPacientes}
        setEditIndex={setEditIndex}
      />
    </div>
  )
}

export default Pacientes