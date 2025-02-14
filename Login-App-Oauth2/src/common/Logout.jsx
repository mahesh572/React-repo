import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const Logout =()=>{
const isAuthenticated = localStorage.getItem("isAuthenticated")
const navigate = useNavigate()
    useEffect(()=>{
        localStorage.removeItem("isAuthenticated")
        navigate("/")
    },[isAuthenticated])

    

    

return(
    <p>Logging out...</p>
)


}

export default Logout
