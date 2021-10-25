import React, {useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async ()=> {
		const response = await axios(API);
		setProducts(response.data);
	}, [])	

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />	//se va iterar cada de uno de los productos de products y hacer render de los product item
				))}
			</div>
		</section>
	);
}

export default ProductList;