import React from 'react';

const Product = () => {
    const Product = {
        name: "Playera",
        price: 100
    };
    return (
        <div>
            <h2>{Product.name}</h2>
            <p>Precio: {Product.price}</p>
        </div>
    );
};
export default Product;