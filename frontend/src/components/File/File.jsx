import './File.css'

export default function File() {
  return (
    <div className='container-file'>

      <div className='content'>
        <div className='imagen'>
          <img src='https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all' alt='nombre mascota' />
        </div>

        <div className='datos'>
          <h2>PLUTO</h2>
          <ul className='list-group'>
            <li>Raza:</li>
            <li>Edad:</li>
            <li>Color:</li>
            <li>Tamaño:</li>
            <li>Dueño:</li>
            <li>Direccion:</li>

          </ul>

        </div>

        <div className='codigoQR'>CODIGO QR</div>
      </div>

      <div className='button-btn'>
        <button className='btn-qr' type='button'>Generar QR</button>
      </div>

    </div>
  )
}

