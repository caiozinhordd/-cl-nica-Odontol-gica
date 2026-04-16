import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ background: "#0077b6", padding: "10px" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Home</Link>
      <Link to="/pacientes" style={{ color: "#fff" }}>Pacientes</Link>
    </nav>
  )
}

export default Navbar