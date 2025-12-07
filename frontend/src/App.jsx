import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Inventario from './components/Inventario';
import Ventas from './components/Ventas';   // <--- Importar
import Compras from './components/Compras'; // <--- Importar

// Componente simple para el menú de navegación (Navbar)
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/inventario">TecnoRepuestos</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/inventario">Inventario</Link>
          <Link className="nav-link" to="/ventas">Ventas</Link>
          <Link className="nav-link" to="/compras">Compras</Link>
          <Link className="nav-link text-danger" to="/">Salir</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Rutas protegidas con Menú */}
        <Route path="/inventario" element={<><Navbar /><Inventario /></>} />
        <Route path="/ventas" element={<><Navbar /><Ventas /></>} />
        <Route path="/compras" element={<><Navbar /><Compras /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;