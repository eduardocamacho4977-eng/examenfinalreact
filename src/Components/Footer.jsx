function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {anio} Juan Eduardo Orozco Camacho · ficha 3223898 
      </p>
      <p className="footer__apis">
        Datos de prueba:{' '}
        <a href="https://fakestoreapi.com" target="_blank" rel="noreferrer">
          FakeStoreAPI
        </a>{' '}
        y{' '}
        <a href="https://dummyjson.com" target="_blank" rel="noreferrer">
          DummyJSON
        </a>
      </p>
    </footer>
  );
}

export default Footer;
