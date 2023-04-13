import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get('http://localhost:3001/persons').then((response)=> response.data)
} 