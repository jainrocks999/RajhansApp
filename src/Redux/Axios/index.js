import axios from 'axios';
import {SERVER_URL} from '../../Config/constant';

export default axios.create({
    baseURL:SERVER_URL,
    timeout:60000,
})

