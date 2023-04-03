import React, {useEffect, useState} from 'react';
import './App.scss';
import Api from '../api'
import {Product} from "../api/models";


const App = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    useEffect(() => {
        Api.get_products().then(setProducts);
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
