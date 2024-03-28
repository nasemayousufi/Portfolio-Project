
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Skill from "./Pages/Skill";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />}/>
        <Route path='skill' element={<Skill />}/>
        <Route path='project' element={<Project />}/>
        <Route path ="about" element={<About />}/>
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
      </Route>
 
    </Routes>
    </BrowserRouter>
   
  );
}
 
export default App;
 
