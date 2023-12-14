import './App.css';
import {Routes,Route} from 'react-router-dom'

// Pages are imported below
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';

function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>

      </Routes>

   </>
  );
}

export default App;
