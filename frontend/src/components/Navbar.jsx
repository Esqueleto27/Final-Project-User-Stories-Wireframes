function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          PetQR
        </a>

        <div className="d-flex gap-3">
          <a className="nav-link" href="#">
            Inicio
          </a>

          <a className="nav-link" href="#">
            Mascotas
          </a>

          <button className="btn btn-dark">Iniciar sesión</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
