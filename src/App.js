import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ScrolltoTop from './utils/scrollToTop';

import './css/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paghes/home/Home';
import Projects from './paghes/projects/Projects';
import Contacts from './paghes/contacts/Contacts';
import Project from './paghes/project/Project';
import Skils from './paghes/skils/Skils';



function App() {
  return (
    <div className="App">
      <Router>
        <ScrolltoTop/>
        <Navbar/>
        <Routes>
          <Route path='/myPortfolio' element={<Home/>}/>
          <Route path='/myPortfolio/projects/' element={<Projects/>}/>
          <Route path='/myPortfolio/project/:id' element={<Project/>}/>
          <Route path='/myPortfolio/contacts' element={<Contacts/>}/>
          <Route path='/myPortfolio/skils' element = {<Skils/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
