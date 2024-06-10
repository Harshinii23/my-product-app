import {Productcard} from "./productcard/productcard";
import './products.css';
import Products from './products.json';

const ProductsList = () =>{

return (
<div className="productContainer">
{
Products.products.map(product => {
   return  <Productcard name = {product.name} image={product.img} price={product.price} />
})
}
</div>
)
}

export default ProductsList;