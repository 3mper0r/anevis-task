import axios from "axios";
import Cookies from "js-cookie";

export const axiosPublic = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, */*',
    }
})


export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, */*',
        common: {
            'Authorization': `Bearer ${Cookies.get('token')}`,
        }
    },
})