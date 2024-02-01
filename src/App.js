import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeEdit from './components/EmployeeEdit';
import Header from './components/Header';
import {v4 as uuidv4} from 'uuid';

function App() {
  const[role, setRole] = useState('N/A');
  const[employees, setEmployees] = useState(
    [
      {
        id:2,
        name: 'Frank Ikwuegbu', 
        role: 'Senior Dev.', 
        img:'https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id:4,
        name: 'Abde Maram',
        role: 'Senior Dev.',
        img:'https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id:6,
        name: 'Abubakar Nazir',
        role: 'Junior Dev.',
        img:'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id:8,
        name: 'Carrie Mathison', 
        role: 'Junior Dev.', 
        img:'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id:10,
        name: 'Afolabi Kehinde-Joyce', 
        role: 'Senior Dev.', 
        img:'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id:12,
        name: 'Aakash Vikram', 
        role: 'Developer', 
        img:'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
  ]
  );

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees =  employees.map((employee) => {
      if (id === employee.id) {
        return {...employee, name: newName, role: newRole}
      }
      return employee;
    }
  )
    setEmployees(updatedEmployees)
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role:role,
      img: img,
    };
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-500 min-h-screen">
      <Header />
      {showEmployees ?
        <>
          <div className='flex flex-wrap justify-center my-2'>
            {employees.map((employee) => {
              const employeeEdit = (
                <EmployeeEdit
                    id={employee.id} 
                    name={employee.name} 
                    role={employee.role} 
                    updateEmployee={updateEmployee}
                />
              )
              return(
                <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  employeeEdit={employeeEdit}
                />
              );
            }
            )
          }
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      :
        <p>access denied</p>
      }
    </div>
  );
}

export default App;
