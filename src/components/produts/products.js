import Productcard from './productcard';
import './products.css';
import Products from './products.json';
import Dropdown from "../dropdown/dropdown";
import { useEffect, useState } from "react";

const ProductsList = () => {
   const ddlOptions = [
      { "label": "INR", "symbol": "₹" },
      { "label": "USD", "symbol": "$" },
      { "label": "EUR", "symbol": "€" }
   ];
   const initialCurrency = JSON.parse(localStorage.getItem('selectedCurrency')) || ddlOptions[0];

   const [currency, setCurrency] = useState(initialCurrency);
   const [rates, setRates] = useState({ "INR": 1 });
   const [exchange, setExchange] = useState(1);

   useEffect(() => {
      fetch("https://v6.exchangerate-api.com/v6/6ec736888b5ed3f3c3d6f3d3/latest/INR")
         .then((response) => response.json())
         .then((data) => {
            setRates(data.conversion_rates);
            setExchange(data.conversion_rates[initialCurrency.label]);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [initialCurrency.label]);

   const onSelect = (option) => {
      setCurrency(option);
      setExchange(rates[option.label] || 1);
      localStorage.setItem('selectedCurrency', JSON.stringify(option));
   };

   return (
      <>
         <div className="ddWrapper">
            <Dropdown
               className="dropdown"
               placeholder="Currency"
               onSelect={onSelect}
               ddlOptions={ddlOptions}
            />
         </div>

         <div className="productContainer">
            {Products.products.map((product, index) => (
               <Productcard
                  key={index}
                  name={product.name}
                  image={product.img}
                  price={product.price}
                  exchange={exchange}
                  symbol={currency.symbol}
               />
            ))}
         </div>
      </>
   );
};

export default ProductsList;
