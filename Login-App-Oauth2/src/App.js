import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import LoginComponent from './common/LoginComponent';
import Home from './common/Home';
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import MenuBar from './common/MenuBar';

function App() {
  return (
    <div>
     
      <MenuBar></MenuBar>
	  
      
    </div>
  );
}

export default App;
