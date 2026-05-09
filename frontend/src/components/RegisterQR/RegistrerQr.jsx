import "./RegisterQR.css"
import { Link } from "react-router-dom"
export default function RegistrerQr() {
  return (
    <>

      <div className="container-register">
        <h4>NOMBRE FORMULARIO</h4>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Nombre Mascota</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Raza</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Edad</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">color</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Tamaño</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Dueño</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Direccion</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Foto Mascota</label>
          <input type="file" class="form-control" id="exampleFormControlInput1" />
        </div>


        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to="/File">
            <button class="btn " type="button">Guardar</button>
          </Link>

        </div>


      </div>
    </>
  )
}
