
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import vite from '../assets/vite.svg';
import { useCarritoStore } from '../Store/useCarritoStore.js';

function Header() {
  const navigate = useNavigate();


  const totalUnidades = useCarritoStore((state) =>
    state.productos.reduce((acumulado, p) => acumulado + p.cantidad, 0)
  );


  useEffect(() => {
    document.title =
      totalUnidades > 0 ? `(${totalUnidades}) MercaCauca` : 'MercaCauca';
  }, [totalUnidades]);

  return (
    <header className="header">
      <div className="header__marca">
        <img src={vite} alt="vite de MercaCauca" className="header__vite" />
        <div>
          <h1 className="header__titulo">MercaCauca</h1>
          <p className="header__lema">Tu mercado en línea mas confiable</p>
        </div>
      </div>

    
      <button
        type="button"
        className="header__carrito"
        onClick={() => navigate('/compras')}
        aria-label={`Ver carrito, ${totalUnidades} productos`}
      >
        🛒
       
        {totalUnidades > 0 && (
          <span className="header__burbuja">{totalUnidades}</span>
        )}
      </button>
    </header>
  );
}

export default Header;
