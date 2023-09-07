import React from 'react';
import {RecoilRoot} from 'recoil';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

import Headers from './component/header/header.container';
import MainPage from './component/main/main.container';
import LoginPage from './component/login/login.container';
import NavigationPage from './component/navigation/navigation.container';
import CategoriesPage from './component/categories/categories.container';

function App() {
  const location = useLocation();

  
  return (
    <RecoilRoot>
      <Headers />
      {location.pathname === '/categories' &&<NavigationPage />}
      <Routes>
        <Route path='/'element={<MainPage />}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/:categories' element={<CategoriesPage />}></Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
