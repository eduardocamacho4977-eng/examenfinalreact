
import { NavLink, Outlet } from 'react-router-dom';

import vite from '../assets/vite.svg';

function SectionCatalogo() {
  return (
    <section className="seccion">
     
      <img
        src={vite}
        alt="Portada del catálogo con bolsas y cajas de compras"
        className="seccion__vite"
      />

      <div className="pestanas">
        <NavLink to="/catalogo" end className="pestanas__item">
          Cargados con fetch
        </NavLink>
        <NavLink to="/catalogo/axios" className="pestanas__item">
          Cargados con Axios
        </NavLink>
      </div>

    
      <div className="seccion__contenido">
        <Outlet />
      </div>
    </section>
  );
}

export default SectionCatalogo;
