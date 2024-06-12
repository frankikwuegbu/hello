import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeEdit from './components/EmployeeEdit';
import Header from './components/Header';
import Employees from './pages/Employees';
import Dictionary from './pages/Dictionary';
import Customers from './pages/Customers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/dictionary/:search' element={<Definition />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
