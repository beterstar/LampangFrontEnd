import { Routes, Route } from 'react-router-dom';
import { RoutesComponent } from './routes/Routes';
import PrivateRoute from './routes/PrivateRoute';
import NotFoundPage from './pages/404/NotFoundPage';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';

function App() {
  return (
    <>
      <Routes>
        {/* public route 👇 */}
        <Route index path='/' element={<Login />} />


        {RoutesComponent.map((list) => (
          <Route path={list.path} element={<list.component />} />
        ))}




        {/* Private Route Zone */}
        <Route element={<PrivateRoute />}>
          {/* 👇 */}

        </Route>

        {/* 404 PAGE 👇 */}
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </>
  );
}

export default App;
