import React, {useEffect, useState} from 'react';
import './App.scss';
import axios from 'axios';

interface Product {
    id: number,
    name: string,
    sku: number,
    description: string,
    price: number,
    quantity: number,
    created_at: Date,
    updated_at: Date
}

const App = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    useEffect(() => {
        axios.get<Product[]>('http://localhost:8000/api/products')
             .then(response => setProducts(response.data));
    }, []);

    return (
        <div>
            <h1 className="text-center">Products</h1>
            <div className="container">
                {products?.map(product => (
                    <div key={product.id}>
                        {product.name}
                        <div>{product.price}</div>
                    </div>)
                )}
            </div>
        </div>
    );
};


export default App;
