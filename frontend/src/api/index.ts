
import axios from 'axios';
import {Product} from './models';

const API_URL = process.env.API_URL!;

export default class Api {
    static async get_products() {
        return (await axios.get<Product[]>(`${API_URL}/products`)).data
    }
}
