
import { Outlet } from 'react-router-dom';

import Header from '../Components/Header.jsx';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

function Layout() {
  return (
    <div className="app">
      <Header />
      <Navbar />
    
      <main className="contenido">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
