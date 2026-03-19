import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { Login } from '../views/Login';
import { Registro } from '../pages/Registro';
import { Acerca } from '../pages/Acerca';
import { NotFound } from '../views/NotFound';
import { RouteProtected } from '../components/RouteProtected';

const RouterApp = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteProtected>
              <Home />
            </RouteProtected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export { RouterApp };
