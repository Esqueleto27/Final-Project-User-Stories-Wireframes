function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          PetQR
        </a>

        <div className="d-flex gap-3">
          <a className="nav-link" href="#">
            Home
          </a>

          <a className="nav-link" href="#">
            Pets
          </a>

          <button className="btn btn-dark">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
