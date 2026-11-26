
import { Routes, Route } from 'react-router-dom';

//
import Layout from './Layouts/Layoout.jsx'

import SectionCatalogo from './Sections/SectionCatalogo.jsx';
import SectionCompras from './Sections/SectionCompras.jsx';


import Inicio from './Pages/Inicio.jsx';
import ProductosFetch from './Pages/ProductosFetch.jsx';
import ProductosAxios from './Pages/ProductosAxios.jsx';
import Carrito from './Pages/Carrito.jsx';
import Resumen from './Pages/Resumen.jsx';
import NoEncontrado from './Pages/NoEncontrado.jsx';

function App() {
  return (
    <Routes>
   
      <Route path="/" element={<Layout />}>
       
        <Route index element={<Inicio />} />

       
        <Route path="catalogo" element={<SectionCatalogo />}>
          <Route index element={<ProductosFetch />} />
          <Route path="axios" element={<ProductosAxios />} />
        </Route>

       
        <Route path="compras" element={<SectionCompras />}>
          <Route index element={<Carrito />} />
          <Route path="resumen" element={<Resumen />} />
        </Route>

      
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}

export default App;
