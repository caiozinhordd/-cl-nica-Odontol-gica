import { useState, useEffect } from "react"

function FormPaciente({ pacientes, setPacientes, editIndex, setEditIndex }) {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")

  useEffect(() => {
    if (editIndex !== null) {
      const p = pacientes[editIndex]
      setNome(p.nome)
      setIdade(p.idade)
      setTelefone(p.telefone)
    }
  }, [editIndex])

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

  return (
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
  )
}

export default FormPaciente