import { Link } from "react-router-dom";
import './Products.css';
import Itemcard from '../Itemcard/Itemcard'
import Data from "../Data/Data";
import Cart from "../Cart/Cart";
import { CartProvider } from "react-use-cart";

const Products =()=> {
    return(
        <>
        <CartProvider>
            <h1 className="text-center mt-3"> All Items </h1>
            <section className="py-4 container">
            <div className="row justify-content-center ">
                {Data.ProductData.map((item, index)=>{
                    return(
                        <Itemcard
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key={index}
                        />
                    )
                })}
               <Cart/>
            
            </div>
            </section>
            </CartProvider>
        </>
    );
       
};

export default Products;