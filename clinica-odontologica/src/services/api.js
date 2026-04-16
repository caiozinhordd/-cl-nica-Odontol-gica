let pacientes = []

export function getPacientes() {
  return pacientes
}

export function addPaciente(paciente) {
  pacientes.push(paciente)
}

export function deletePaciente(index) {
  pacientes.splice(index, 1)
}

export function updatePaciente(index, novoPaciente) {
  pacientes[index] = novoPaciente
}