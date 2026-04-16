function ListaPacientes({ pacientes, setPacientes, setEditIndex }) {

  function excluir(index) {
    const lista = pacientes.filter((_, i) => i !== index)
    setPacientes(lista)
  }

  function editar(index) {
    setEditIndex(index)
  }

  return (
    <div>
      <h3>Lista de Pacientes</h3>

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

export default ListaPacientes