// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Github_user_search from './pages/Github_user_search';
import Landing_page_adv from './pages/Landing_page_adv';
import Landing_page_ez from './pages/Landing_page_ez';
import Tips_calculator from './pages/Tips_calculator';
import Ecommerce from './pages/Ecommerce';
import Home from './pages/Home';
import Return from './pages/Return';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="project" element={<Return />}>
          <Route path="git" element={<Github_user_search />} />
          <Route path="abv" element={<Landing_page_adv />} />
          <Route path="ez" element={<Landing_page_ez />} />
          <Route path="calc" element={<Tips_calculator />} />
          <Route path="ecomm" element={<Ecommerce />}>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
