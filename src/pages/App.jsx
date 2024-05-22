import Beranda from './Beranda/Beranda';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Daftar/SignIn";
import SignUp from "./Masuk/SignUp";
import Learn from './Pelajari/Learn'
import Colection from './Koleksi/Colection';
import Upload from './Upload/Upload'
import News from './Berita/News';
import Schedule from './Agenda/Schedule';
import Review from './Ulasan/Review';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/daftar' element={<SignIn/>}/>
        <Route path='/masuk' element={<SignUp/>}/>
        <Route path='/pelajari' element={<Learn/>}/>
        <Route path='/koleksi' element={<Colection/>}/>
        <Route path='/upload' element={<Upload />}/>
        <Route path='/berita' element={<News />}/>
        <Route path='/agenda' element={<Schedule />}/>
        <Route path='/ulasan' element={<Review  />}/>
      </Routes>
    </Router>
    
  )
}

export default App;
