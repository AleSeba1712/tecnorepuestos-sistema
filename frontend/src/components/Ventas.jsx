import { useState } from 'react';

function Ventas() {
  const [carrito, setCarrito] = useState([]);
  const [cliente, setCliente] = useState('');
  const [productoBusqueda, setProductoBusqueda] = useState('');

  // Simulación de productos disponibles
  const catalogo = [
    { id: 1, nombre: 'Cable HDMI 2m', precio: 5.50 },
    { id: 2, nombre: 'Mouse Gamer RGB', precio: 25.00 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 45.00 },
  ];

  const agregarProducto = () => {
    // Buscamos un producto al azar para simular el escaneo
    const producto = catalogo.find(p => p.nombre.toLowerCase().includes(productoBusqueda.toLowerCase()));
    
    if (producto) {
      const itemEnCarrito = { ...producto, cantidad: 1, subtotal: producto.precio };
      setCarrito([...carrito, itemEnCarrito]);
      setProductoBusqueda(''); // Limpiar input
    } else {
      alert('Producto no encontrado (Prueba escribiendo "Cable" o "Mouse")');
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">🛒 Registro de Venta (Punto de Venta)</h2>
      
      {/* Datos del Cliente */}
      <div className="card mb-4 p-3 bg-light">
        <div className="row">
          <div className="col-md-4">
            <label className="form-label">Cédula / RUC Cliente:</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="099..." 
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>
          <div className="col-md-4 d-flex align-items-end">
            <button className="btn btn-outline-primary">Buscar Cliente</button>
          </div>
        </div>
      </div>

      {/* Buscador de Productos */}
      <div className="row mb-3">
        <div className="col-md-8">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Escanear código o buscar producto..."
            value={productoBusqueda}
            onChange={(e) => setProductoBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-success w-100" onClick={agregarProducto}>
            + Agregar Producto
          </button>
        </div>
      </div>

      {/* Tabla de Carrito */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Producto</th>
            <th>Precio Unit.</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length === 0 ? (
            <tr><td colSpan="5" className="text-center text-muted">El carrito está vacío</td></tr>
          ) : (
            carrito.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>${item.precio.toFixed(2)}</td>
                <td>
                  <input type="number" className="form-control form-control-sm" style={{width: '60px'}} defaultValue={1} />
                </td>
                <td>${item.subtotal.toFixed(2)}</td>
                <td><button className="btn btn-danger btn-sm">X</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Totales */}
      <div className="d-flex justify-content-end">
        <div className="card p-3" style={{width: '300px'}}>
          <h4>Total a Pagar: <span className="text-success">${calcularTotal()}</span></h4>
          <button className="btn btn-primary mt-2" onClick={() => alert('¡Venta registrada exitosamente!')}>
            💾 FINALIZAR VENTA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ventas;