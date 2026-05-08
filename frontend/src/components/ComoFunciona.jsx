function ComoFunciona() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">How It Works</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h4>1. Register</h4>

              <p className="text-secondary">
                Create an account and add your pet information.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h4>2. Generate QR</h4>

              <p className="text-secondary">
                Generate a unique QR code linked to your pet profile.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h4>3. Scan & Identify</h4>

              <p className="text-secondary">
                Anyone can scan the QR code to access your pet profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
