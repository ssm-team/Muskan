import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    {/* <AllUsers/> */}
       <NavBar /> 
      <Routes>  
        <Route index path="/" element={<Home/>} />
        <Route index path="/all" element={<AllUsers/>} />
        <Route index path="/add" element={<AddUser/>} />
        <Route index path="/edit/:id" element={<EditUser/>} />
        <Route element={<NotFound/>} />
      </Routes> 
    </BrowserRouter>  
  );
}

export default App;
