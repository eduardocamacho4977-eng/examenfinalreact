
import { useNavigate } from 'react-router-dom';

import hero from '../assets/hero.padding: ,'
import react from '../assets/react.svg';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio">
      <h2 className="inicio__titulo">Bienvenido a MercaCauca</h2>
      <p className="inicio__texto">
        Explora los produtos más solicitados por los usuarios de colombia
      </p>

      <div className="inicio__tarjetas">
       
        <article className="tarjeta-inicio">
          <img src={hero} alt="Vista previa del catálogo" />
          <h3>Catálogo</h3>
          
          <button
            type="button"
            className="btn btn--primario"
            onClick={() => navigate('/catalogo')}
          >
            Ver catálogo
          </button>
        </article>

       
        <article className="tarjeta-inicio">
          <img src={react} alt="Vista previa del carrito" />
          <h3>Mis productos</h3>
          <p></p>
          <button
            type="button"
            className="btn btn--secundario"
            onClick={() => navigate('/compras')}
          >
            Ir al carrito
          </button>
        </article>
      </div>
    </div>
  );
}

export default Inicio;
