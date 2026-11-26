
const formateador = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'cop',
});

export const formatearPrecio = (valor) => formateador.format(valor);
