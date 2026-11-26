function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* el footer con el nombre del autor y las apis usados*/}
      <p>
        © {anio} Juan Eduardo Orozco Camacho · ficha 3223898 
      </p>
      <p className="footer__apis">
        Datos de prueba:{' '}
        {/* api usada con fetch*/}
        <a href="https://fakestoreapi.com" target="_blank" rel="noreferrer">
          FakeStoreAPI
        </a>{' '}
        y{' '}
        {/* api usada con axios*/}
        <a href="https://dummyjson.com" target="_blank" rel="noreferrer">
          DummyJSON
        </a>
      </p>
    </footer>
  );
}

export default Footer;
