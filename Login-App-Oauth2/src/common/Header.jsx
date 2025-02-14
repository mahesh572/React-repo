import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import '../index.css';

function Header(){
    let isAuthenticated = "false";
    isAuthenticated = useSelector((state)=>state.authentication.isAuthenticated)
     
    if(isAuthenticated!=null){
        isAuthenticated = localStorage.getItem("isAuthenticated")
    }
   

    return (
        <div>
            <header className="border-bottom border-light border-5 mb-5 p-2">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand ms-2 fs-2 fw-bold text-white" href="#">Mayuktha</a>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item fs-5 "><Link className="nav-link text-white" to="/home">Home</Link></li>
                                    <li className="nav-item fs-5"><Link className="nav-link text-white" to="/users">Users</Link></li>
                                </ul>
                            </div>
                            <ul className="navbar-nav">
                                {
                                    
                                    isAuthenticated ? (<li className="nav-item fs-5"><Link className="nav-link text-white" to="/logout">Logout</Link></li>):(<li className="nav-item fs-5"><Link className="nav-link text-white" to="/login">Login</Link></li>)
                                }
                                                               
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            
        </div>
    );
}

export default Header;