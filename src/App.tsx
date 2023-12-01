import { Routes, Route } from 'react-router-dom';
import { RoutesComponent } from './routes/Routes';
import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Routes>
        {/* public route 👇 */}
        <Route index path='/' element={<Home />} />


        {RoutesComponent.map((list) => (
          <Route path={list.path} element={<list.component />} />
        ))}




        {/* Private Route Zone */}
        <Route element={<PrivateRoute />}>

          {/* 👇 */}


        </Route>

      </Routes>
    </>
  );
}

export default App;
