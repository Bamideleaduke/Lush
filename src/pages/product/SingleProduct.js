import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Products from '../product/Products';
import products from '../../data';


const SingleProduct = () => {
    const {productId} = useParams()
    const product = products.find((product) => product.id === productId)
   console.log(productId);
    const {name, image} = product
  return (
    <section className='singleproduct'>
      <img  src={image} alt={name} />
        <h2>{name}</h2>
        <Link  to="/products" element={<Products />} >back to products</Link>

    </section>
  );
}

export default SingleProduct;
