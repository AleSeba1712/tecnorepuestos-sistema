import { useState } from 'react';

function Compras() {
  return (
    <div className="container mt-4">
      <h2 className="text-danger mb-4">📦 Registro de Compra (Ingreso de Bodega)</h2>
      
      {/* Cabecera de Compra */}
      <div className="card mb-4">
        <div className="card-header bg-secondary text-white">Datos del Proveedor</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Seleccionar Proveedor:</label>
              <select className="form-select">
                <option>TecnoImport S.A.</option>
                <option>Global Electronics</option>
                <option>Distribuidora Local</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Número de Factura / Remisión:</label>
              <input type="text" className="form-control" placeholder="FAC-001-..." />
            </div>
            <div className="col-md-4">
              <label>Fecha de Recepción:</label>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
      </div>

      {/* Ingreso de Items */}
      <h5 className="mb-3">Detalle de Productos Recibidos</h5>
      <div className="row g-2 mb-3">
        <div className="col-md-5">
          <input type="text" className="form-control" placeholder="Buscar producto a ingresar..." />
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" placeholder="Cant." />
        </div>
        <div className="col-md-3">
          <input type="number" className="form-control" placeholder="Costo Unitario ($)" />
        </div>
        <div className="col-md-2">
          <button className="btn btn-warning w-100">Agregar</button>
        </div>
      </div>

      {/* Lista Mockup estática para la foto */}
      <table className="table table-hover border">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad Recibida</th>
            <th>Costo Unitario</th>
            <th>Total Línea</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cable HDMI 2m</td>
            <td>100</td>
            <td>$ 2.50</td>
            <td>$ 250.00</td>
          </tr>
          <tr>
            <td>Mouse Gamer RGB</td>
            <td>50</td>
            <td>$ 12.00</td>
            <td>$ 600.00</td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="3" className="text-end fw-bold">Total Factura:</td>
                <td className="fw-bold">$ 850.00</td>
            </tr>
        </tfoot>
      </table>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
        <button className="btn btn-secondary me-md-2">Cancelar</button>
        <button className="btn btn-success" onClick={() => alert('Stock actualizado correctamente')}>
          CONFIRMAR INGRESO AL INVENTARIO
        </button>
      </div>
    </div>
  );
}

export default Compras;