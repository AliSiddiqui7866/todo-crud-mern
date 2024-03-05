import './App.css';
import {BrowserRouter,Routes,Route} from  "react-router-dom";
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Users/>} />
      <Route path="/create" element={<CreateUser/>} />
      <Route path="/update/:id" element={<UpdateUser/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
