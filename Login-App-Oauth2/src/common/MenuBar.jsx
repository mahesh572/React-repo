import Header from "./Header";
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import Home from "./Home";
import LoginComponent from './LoginComponent';
import Layout from './Layout'

import Error from './Error'
import Logout from './Logout'

function MenuBar(){

    return (<>
    <BrowserRouter>
        <Routes>
            
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
         <Route path="/login" element={<Layout><LoginComponent></LoginComponent></Layout>}></Route> 
         <Route path="/logout" element={<Layout><Logout></Logout></Layout>}></Route>
         <Route path="/error" element={<Layout><Error></Error></Layout>}></Route>
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default MenuBar;