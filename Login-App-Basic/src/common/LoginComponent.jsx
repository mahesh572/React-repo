
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../index.css';
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authUpdate } from "../redux/authenticateSlice";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './authService'

function LoginComponent(){
const navigate = useNavigate()
    const [user,setUser] = useState({
        'email':'',
        'password':''
    })
const authenticated = useSelector((state)=>state.authentication.isAuthenticated)
console.log("isAuthenticated:::::::::::",authenticated)
const dispatch = useDispatch()

    function registeruser(event){
        console.log('Login event is clicked......',event)
        event.preventDefault()
        console.log('email::::',user.email)
        console.log('password::::',user.password)
        let formData = new FormData();
        formData.append('email',user.email)
        formData.append('password',user.password)
        const encodedCredentials = btoa(`${user.email}:${user.password}`);
        axios({
            method: 'POST',
            url: 'http://localhost:8080/api/user',
            formData: formData,
            headers: {
                Authorization: `Basic ${encodedCredentials}`, // Set the Authorization header
                "Content-Type": "application/json" // Set the content type
              },
              data: formData
        }).then(response => {
            console.log('in response.123...',response.data.status)
            
        })

        }

        
        
        
        
        const updatelogindetails = (event)=>{

                const {name,value} =event.target;
                console.log('111:name:::',name)
                console.log('111:::value:',value)

                setUser({
                    ...user,[name]:value
                })
        }
        
        const handleLogin = async (e)=>{
            e.preventDefault();
           const response = await login(user.email,user.password);
           console.log("email:::",user.email)
           console.log("password:::",user.password)
           console.log("isAuthenticated:::",response.isAuthenticated)
            if(response!=null){
                dispatch(authUpdate(response.isAuthenticated))
                localStorage.setItem("isAuthenticated",response.isAuthenticated)
                navigate("/")
            }else{
                navigate("/error")
            }
        }

    return (
        <div className="container mt-5">
        <div className="row justify-content-center ">
            <div className="col-md-4 ">
                <div className="login-form">
                <h2>isAuthenticated: {authenticated?"true":"false"}</h2>
                        <form id="registrationForm" action="#" method='POST' >
                            <div className="form-group mb-3">
                                <label htmlFor="email" className='mb-2'>
                                    Email
                                </label>
                                <input type="email" 
                                       className="form-control" 
                                       id="email" 
                                       placeholder="Email" 
                                       name="email"
                                       required 
                                       onChange={updatelogindetails} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className='mb-2'>
                                    Password
                                </label>
                                <input type="password" 
                                       className="form-control" 
                                       id="password" 
                                       placeholder="Password"
                                       name="password"
                                    required onChange={updatelogindetails}/>
                            </div>
                            <button className="btn btn-danger" onClick={handleLogin}>
                                Login
                            </button>
                        </form>
                        <p className="mt-3">
                            Not registered?
                            <a href="#">Create an
                                account</a>
                        </p>
                    </div>
                
            </div>
        </div>
    </div>
    )
}




export default LoginComponent;