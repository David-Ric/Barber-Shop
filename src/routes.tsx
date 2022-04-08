
import Inicio from './pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuResponsivo from 'pages/MenuResponsivo';
import Loja from 'pages/Loja';
import Footer from 'components/Footer';
import Sobre from 'pages/Sobre';
import Agendamento from 'pages/Agendamento';
import Detalhes from 'pages/Prato';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
       
        <Routes>
          <Route>
            <Route index element={<Inicio />} />
            <Route path="menuResponsivo" element={<MenuResponsivo />} />
            <Route path="loja" element={<Loja />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="agendamento" element={<Agendamento />} />
          </Route>
          <Route path='prato/:id' element={<Detalhes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
          <Footer /> 
      </Router>
    </main>
  );
}
