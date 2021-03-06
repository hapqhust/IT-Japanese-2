import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import DishDetail from './components/Menu/DishDetail';

import MainNavigation from './components/Navigation/MainNavigation';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import MenuPage from './pages/MenuPage';
import ReserPage from './pages/ReserPage';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/gioi-thieu' element={<IntroPage/>}/>
          <Route path='/thuc-don' element={<MenuPage/>}/>
          <Route path='/thuc-don/:dishId' element={<DishDetail/>}/>
          <Route path='/dat-ban' element={<ReserPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
