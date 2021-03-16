import axios from 'axios';
const apiUrl = "http://localhost:3001/api/notes"


export default function getUser(props) {
    const request = axios.get(apiUrl);
    if(props.username === "jeth" && props.password === "jeth") {
        return request.then( response => response.data);
    } else {
        alert("Error en las contraseñas")
    }
}