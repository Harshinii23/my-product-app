import Productcard from './productcard';
import './products.css';
import Products from './products.json';
import Dropdown from "../dropdown/dropdown";
import { useEffect, useState } from "react";

const ProductsList = () =>{
const ddlOptions = [{"label": "INR", "symbol": "₹"},
   {"label": "USD", "symbol": "$"},
   {"label": "EUR", "symbol": "€"}
];
const[currency, setCurrency] = useState({'INR': "I"});
const [rates, setRates]=useState({"INR": "1"})
const [exchange, setExchange]=useState(1);

 useEffect(()=> {
   fetch("https://v6.exchangerate-api.com/v6/6ec736888b5ed3f3c3d6f3d3/latest/INR")
   .then((response) =>{
       return response.json();
   })
   .then((data) => {
       setRates(data.conversion_rates);
   })
   .catch((error) => {
       console.log(error);
   })
   }, []);

 const onSelect = (option) => {
   setCurrency(option);
   setExchange(rates[option.label]);
 }


return (<>
   <div className="ddWrapper">
      <Dropdown className="dropdown" placeholder="Currency" onSelect={onSelect} ddlOptions={ddlOptions} />      
   </div>
   <div className="productContainer">
   {
   Products.products.map((product, index) => {
      return  <Productcard key={index} name = {product.name} image={product.img} price={product.price} exchange = {exchange} symbol={currency.symbol} />
   })
   }
   </div>
</>
)
}

export default ProductsList;