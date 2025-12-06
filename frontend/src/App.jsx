import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Inventario from './components/Inventario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta por defecto va al Login */}
        <Route path="/" element={<Login />} />
        
        {/* Ruta del sistema */}
        <Route path="/inventario" element={<Inventario />} />
        
        {/* Redireccionar cualquier otra cosa al login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;