import logo from './logo.svg';
import './App.css';
import Navbars from './components/Header/Navbar';
import Cloud from './components/Cloud/Cloud';
import Classroom from './components/Classroom/Classroom';
import Features from './components/Features/Features';

function App() {
  return (
    <>
      <Navbars/>
      <Cloud/>
      <Classroom/>
      <Features/>
    </>
  );
}

export default App;
