import Beranda from './Beranda/Beranda';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Daftar/SignIn";
import SignUp from "./Masuk/SignUp";
import Learn from './Pelajari/Learn'
import Colection from './Koleksi/Colection';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/daftar' element={<SignIn/>}/>
        <Route path='/masuk' element={<SignUp/>}/>
        <Route path='/pelajari' element={<Learn/>}/>
        <Route path='/koleksi' element={<Colection/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
