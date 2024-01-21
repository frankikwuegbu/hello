import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';

function App() {
  const[role, setRole] = useState('N/A');
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ?
        <>
        <input 
          type='text'
          onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }}
        />
          <Employee name = 'Frank' role='Intern' />
          <Employee name= 'Jenny' role={role}/>
          <Employee name= 'Vikram' />
        </>
      :
        <p>access denied</p>
      }
    </div>
  );
}

export default App;
