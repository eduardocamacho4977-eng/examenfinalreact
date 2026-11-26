
import { useNavigate, useLocation } from 'react-router-dom';

const BOTONES = [
  { texto: 'Inicio', icono: '🏠ñ', ruta: '/', exacta: true },
  { texto: 'vitrina', icono: '🪟', ruta: '/catalogo', exacta: false },
  { texto: 'Mi canasta', icono: '🛒', ruta: '/compras', exacta: true },
  { texto: 'Mi pedido', icono: '🧾', ruta: '/compras/resumen', exacta: true },
];

function Navbar() {
  const navigate = useNavigate(); 
  const { pathname } = useLocation();

  const estaActivo = (boton) =>
    boton.exacta ? pathname === boton.ruta : pathname.startsWith(boton.ruta);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      {BOTONES.map((boton) => (
        <button
          key={boton.ruta}
          type="button"
  
          className={`navbar__btn ${estaActivo(boton) ? 'navbar__btn--activo' : ''}`}
          onClick={() => navigate(boton.ruta)}
        >
          <span aria-hidden="true">{boton.icono}</span> {boton.texto}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
