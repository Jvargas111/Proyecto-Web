import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//Componentes
import AuthComponent from './components/auth/AuthComponent';
//Vistas
import Error404 from './screens/404';
import ChangePassword from './screens/auth/ChangePassword';
import ForgetPassword from './screens/auth/ForgetPassword';
import Login from './screens/auth/Login';
import MainPage from './screens/auth/MainPage';
import NoticiasPage from './screens/auth/NoticiasPage';
import Register from './screens/auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthComponent />}>
          <Route index element={<Login />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/olvide-contraseña' element={<ForgetPassword />} />
          <Route path='/restablecer-contraseña/:token' element={<ChangePassword />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/noticias' element={<NoticiasPage />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
