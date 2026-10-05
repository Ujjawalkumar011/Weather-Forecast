import "./product.css";
import Price from "./Price.jsx";
function Product ({title,idx}){
     let oldPrices = ["12,925","13,925","16,500","95,258"];
     let newPrices = ["12,999","13,999","14,999","15,999"];
    return(
        <div className="Product" >
            <h4>{title}</h4>
            <p>Description</p>
            <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
        </div>  
    );
}
export default Product;
