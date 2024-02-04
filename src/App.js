import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeEdit from './components/EmployeeEdit';
import Header from './components/Header';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
