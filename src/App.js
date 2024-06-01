import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeEdit from './components/EmployeeEdit';
import Header from './components/Header';
import Employees from './pages/Employees';
import Dictionary from './pages/Dictionary';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Definition from './pages/Definition';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/definition/:search' element={<Definition />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
