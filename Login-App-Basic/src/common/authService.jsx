import axios from "axios";

const API_URL = "http://localhost:8080/api";
export const login = async (email,password)=>{

const authHeader ={
    headers: {
        Authorization: "Basic " + btoa(email + ":" + password),
        Accept: "application/json"
    }

};
try{
const response = await axios.get(`${API_URL}/authenticate/login`,authHeader)
console.log("response:::",response)
return response.data;

}catch(error){
return null;
}

}