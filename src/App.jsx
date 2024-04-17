import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Componentes
import AuthComponent from './components/auth/AuthComponent';
//Vistas
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import ForgetPassword from './screens/auth/ForgetPassword';
import ChangePassword from './screens/auth/ChangePassword';
import Error404 from './screens/404';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthComponent />}>
          <Route index element={<Login />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/olvide-contraseña' element={<ForgetPassword />} />
          <Route path='/restablecer-contraseña/:id' element={<ChangePassword />} />
        </Route>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
