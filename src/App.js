import logo from './logo.svg';
import './App.css';
import  Col from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MyRoutes from './components/MyRoutes';

function App() {
  return (
    <div className="App">
          <MyRoutes />
         {/* <Home /> */}
         {/* <About /> */}
         {/* <Contact /> */}

    </div>
  );
}

export default App;
