import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Home(){
    let isAuthenticated = useSelector((state)=>state.authentication.isAuthenticated)
    if(isAuthenticated!=null){
        isAuthenticated = localStorage.getItem("isAuthenticated")
    }
    return (
            <div>
                    {
                        isAuthenticated?(<div className="container"><p>Welcome...Home</p></div>):(<div className="container"><p>You are not logged in.</p></div>)
                    }
                                          
            </div>
    );
}

export default Home;