import axios from 'axios';




export const addUser = async (data) =>{
    try {
        await axios.post("http://localhost:3000/api/getUsers/addUser",data);
    } catch (error) {
        console.log('Error while add user api ', error.message);
    }
}

export const getUser = async () =>{
    try {
        const response = await axios.get("http://localhost:3000/api/getUsers/getAll");
        
        return response;
    }
    catch (error) {
        console.log('Error while get user api ', error.message);
        }
}