import { useState } from "react"
import "./App.css"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")

  function salvar(e) {
    e.preventDefault()

    const novoPaciente = { nome, idade, telefone }

    if (editIndex !== null) {
      const lista = [...pacientes]
      lista[editIndex] = novoPaciente
      setPacientes(lista)
      setEditIndex(null)
    } else {
      setPacientes([...pacientes, novoPaciente])
    }

    setNome("")
    setIdade("")
    setTelefone("")
  }

  function excluir(index) {
    const lista = pacientes.filter((_, i) => i !== index)
    setPacientes(lista)
  }

  function editar(index) {
    const p = pacientes[index]
    setNome(p.nome)
    setIdade(p.idade)
    setTelefone(p.telefone)
    setEditIndex(index)
  }

  return (
    <div>
      <h1>Clínica Odontológica</h1>

      {/* FORM */}
      <form onSubmit={salvar}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <button type="submit">
          {editIndex !== null ? "Atualizar" : "Salvar"}
        </button>
      </form>

      {/* LISTA */}
      <h2>Pacientes</h2>

      <ul>
        {pacientes.map((p, i) => (
          <li key={i}>
            {p.nome} | {p.idade} anos | {p.telefone}

            <button onClick={() => editar(i)}>Editar</button>
            <button onClick={() => excluir(i)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App