
import { useState, useEffect } from 'react';

import { useCarritoStore } from '../Store/useCarritoStore.js';
import { formatearPrecio } from '../utils/formato.js';

const COSTO_ENVIO = 5;

function Resumen() {
  const productos = useCarritoStore((state) => state.productos);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);

  const [mensaje, setMensaje] = useState('');

  
  const unidades = productos.reduce((acc, p) => acc + p.cantidad, 0);
  const subtotal = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  const envio = productos.length > 0 ? COSTO_ENVIO : 0;
  const total = subtotal + envio;

 
  useEffect(() => {
    if (!mensaje) return; 

    const temporizador = setTimeout(() => setMensaje(''), 4000);

    
    return () => clearTimeout(temporizador);
  }, [mensaje]);

  const finalizarCompra = () => {
    setMensaje(`¡Gracias por tu compra de ${formatearPrecio(total)}! 🎉`);
    vaciarCarrito(); 
  };

  return (
    <div className="resumen">
      <h2>Resumen de compra</h2>

      <dl className="resumen__tabla">
        <dt>Productos distintos</dt>
        <dd>{productos.length}</dd>

        <dt>Unidades</dt>
        <dd>{unidades}</dd>

        <dt>Subtotal</dt>
        <dd>{formatearPrecio(subtotal)}</dd>

        <dt>Envío</dt>
        <dd>{formatearPrecio(envio)}</dd>

        <dt className="resumen__total">Total</dt>
        <dd className="resumen__total">{formatearPrecio(total)}</dd>
      </dl>

      <div className="resumen__acciones">
      
        <button
          type="button"
          className="btn btn--primario"
          onClick={finalizarCompra}
          disabled={productos.length === 0}
        >
          Finalizar compra
        </button>
        <button
          type="button"
          className="btn btn--peligro"
          onClick={vaciarCarrito}
          disabled={productos.length === 0}
        >
          Vaciar carrito
        </button>
      </div>

      {mensaje && <p className="estado estado--exito">{mensaje}</p>}
    </div>
  );
}

export default Resumen;
