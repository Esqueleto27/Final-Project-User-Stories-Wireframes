import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-5" id="home">
        <section className="row align-items-center g-4">
          <div className="col-lg-7">
            <p className="text-uppercase text-primary fw-bold mb-2">Smart pet identification</p>
            <h1 className="display-5 fw-bold mb-3">Keep every pet one scan closer to home.</h1>
            <p className="lead text-secondary mb-4">
              Create QR-enabled pet profiles with emergency details that are easy to access from any device.
            </p>
            <a className="btn btn-outline-primary btn-lg" href="#dashboard">
              View dashboard
            </a>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold mb-3" id="dashboard">
                  Dashboard preview
                </h2>
                <p className="text-secondary mb-0">
                  Manage pet profiles, QR tags, owner contacts, and recovery information from one responsive workspace.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
