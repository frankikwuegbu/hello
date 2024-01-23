import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const[role, setRole] = useState('N/A');
  const[employees, setEmployees] = useState(
    [
      {
        name: 'Frank Ikwuegbu', 
        role: 'Senior Dev.', 
        img:'https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Abde Maram',
        role: 'Senior Dev.',
        img:'https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Abubakar Nazir',
        role: 'Junior Dev.',
        img:'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Carrie Mathison', 
        role: 'Junior Dev.', 
        img:'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Afolabi Kehinde-Joyce', 
        role: 'Senior Dev.', 
        img:'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Aakash Vikram', 
        role: 'Developer', 
        img:'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
  ]
  );

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
        <input 
          type='text'
          onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }}
        />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              console.log(employee);
              return(
                <Employee 
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            }
            )
          }
          </div>
        </>
      :
        <p>access denied</p>
      }
    </div>
  );
}

export default App;
