import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//Componentes
import AuthComponent from './components/auth/AuthComponent';
//Vistas
import Error404 from './screens/404';
import ChangePassword from './screens/auth/ChangePassword';
import ForgetPassword from './screens/auth/ForgetPassword';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import EnVivo from './screens/home/EnVivo';
import HomePage from './screens/home/HomePage';
import NoticeBarcelona from './screens/notice/NoticeBarcelona';
import NoticeRealMadrid from './screens/notice/NoticeRealMadrid';
import NoticeManchesterCity from './screens/notice/NoticeManchesterCity';
import NoticeLiverpool from './screens/notice/NoticeLiverpool';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthComponent />}>
          <Route index element={<Login />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/olvide-contraseña' element={<ForgetPassword />} />
          <Route path='/restablecer-contraseña/:token' element={<ChangePassword />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/NoticeBarcelona' element={<NoticeBarcelona />} />
          <Route path='/NoticeRealMadrid' element={<NoticeRealMadrid />} />
          <Route path='/NoticeManchesterCity' element={<NoticeManchesterCity />} />
          <Route path='/NoticeLiverpool' element={<NoticeLiverpool />} />
          <Route path='/NoticeBayernMunich' element={<NoticeManchesterCity />} />
          <Route path='/envivo' element={<EnVivo />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
