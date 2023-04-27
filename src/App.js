import './App.css';
import EmpCreate from './Employee/EmpCreate';
import EmpDetails from './Employee/EmpDetails';
import EmpEdit from './Employee/EmpEdit';
import EmpListing from './Employee/EmpListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <h1>React js CRUD operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />} />
          <Route path='/employee/create' element={<EmpCreate />} />
          <Route path='/employee/detail/:empid' element={<EmpDetails />} />
          <Route path='/employee/edit/:empid' element={<EmpEdit />} />
          
        </Routes>
      </BrowserRouter>
  
      
    </div>
  );

}

// export default App;



export default App;
