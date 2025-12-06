import { useEffect, useState } from 'react';

function Inventario() {
  // Estado para guardar productos
  const [productos, setProductos] = useState([]);

  // Simulamos cargar datos al iniciar
  useEffect(() => {
    // fetch('http://localhost:3000/api/productos')
    //   .then(res => res.json())
    //   .then(data => setProductos(data))
    
    // DATA FALSA PARA PROBAR AHORA MISMO
    const dataFalsa = [
      { id: 1, codigo: 'HDMI-001', nombre: 'Cable HDMI 2m', precio: 5.50, stock: 120 },
      { id: 2, codigo: 'MOU-RGB', nombre: 'Mouse Gamer', precio: 25.00, stock: 5 },
      { id: 3, codigo: 'TEC-MEC', nombre: 'Teclado Mecánico', precio: 45.00, stock: 12 }
    ];
    setProductos(dataFalsa);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Gestión de Inventario</h2>
      <div className="d-flex justify-content-between mb-3">
        <input type="text" className="form-control w-50" placeholder="Buscar producto..." />
        <button className="btn btn-success">+ Nuevo Producto</button>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.codigo}</td>
              <td>{prod.nombre}</td>
              <td>${prod.precio.toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                {prod.stock < 10 ? (
                  <span className="badge bg-danger">Bajo Stock</span>
                ) : (
                  <span className="badge bg-success">OK</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventario;