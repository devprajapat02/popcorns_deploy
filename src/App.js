import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <div className="App" style={{backgroundColor: "rgb(250, 250, 255)"}}>
      <div className='col'>
        <div className=''><Navbar /></div>
        <div className=''><Main /></div>
        <div className=''><Footer /></div>
      </div>
    </div>
  );
}

export default App;
