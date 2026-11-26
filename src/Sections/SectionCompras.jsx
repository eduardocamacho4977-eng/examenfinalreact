
import { NavLink, Outlet } from 'react-router-dom';

import react from '../assets/react.svg';
import { useCarritoStore } from '../store/useCarritoStore.js';

function SectionCompras() {
  const distintos = useCarritoStore((state) => state.productos.length);

  return (
    <section className="seccion">
      <img
        src={react}
        alt="Portada de compras con un carrito de mercado"
        className="seccion__react"
      />

      <div className="pestanas">
        <NavLink to="/compras" end className="pestanas__item">
          Carrito ({distintos})
        </NavLink>
        <NavLink to="/compras/resumen" className="pestanas__item">
          ver tus compra
        </NavLink>
      </div>

      <div className="seccion__contenido">
        <Outlet />
      </div>
    </section>
  );
}

export default SectionCompras;
