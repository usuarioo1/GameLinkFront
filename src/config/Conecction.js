import axios from "axios"

const products = async() =>{
    const response = await axios.get('http://localhost:8080/games');
    console.log(response.data)
    
}