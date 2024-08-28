import axios from 'axios';

export const addUser = async (data) => {
    try {
        await axios.post("http://localhost:3000/api/getUsers/addUser", data);
    } catch (error) {
        console.log('Error while adding user:', error.message);
    }
}

export const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/getUsers/getAll");
        return response.data; // Return just the data
    } catch (error) {
        console.log('Error while getting users:', error.message);
    }
}

export const Convo = async (data) => {
    try {
        const response = await axios.post("http://localhost:3000/api/getUsers/convo/add", data);
        return response.data; // Return only the data
    } catch (error) {
        console.log('Error while setting conversation:', error.message);
        throw error; // Optionally rethrow the error for further handling
    }
}

export const getConversation = async (data) => {
    try {
        const response = await axios.post("http://localhost:3000/api/getUsers/convo/get", data);
        return response.data; 
    } catch (error) {
        console.log('Error while getting conversation:', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        const response = await axios.post("http://localhost:3000/api/getUsers/message/add", data);
        return response.data;
    } catch (error) {
        console.log('Error while new message API:', error.message);
    }
}

export const getMessages = async (id) => {
    try {
       
        const response = await axios.get(`http://localhost:3000/api/getUsers/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error while getMessages API:', error.message);
        return null; // Return null in case of an error
    }
}

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/getUsers/file/upload`, data);
        return (response.data);
    } catch (error) {
        console.error('Error while uploadFile API:', error.message);
    }
}

export const getFile = async(id) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/getUsers/file/${id}`);
        return response;
    } catch (error) {
        console.error('Error while gettingFile API:', error.message);
    }
}
