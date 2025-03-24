import axios from 'axios';
import {API_URL} from "../config/strings.js";

export const fetchSkips = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};