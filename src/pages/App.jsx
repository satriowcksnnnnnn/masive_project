import Beranda from './Beranda/Beranda';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Daftar/SignIn";
import SignUp from "./Masuk/SignUp";
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/daftar' element={<SignIn/>}/>
        <Route path='/masuk' element={<SignUp/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
