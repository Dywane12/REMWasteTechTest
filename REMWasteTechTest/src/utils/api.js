import axios from 'axios';
import {strings} from "../strings/strings.js";

export const fetchSkips = async () => {
    const response = await axios.get(strings.apiURL);
    return response.data;
};