import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Itemcard from "../Itemcard/Itemcard";
import Data from "../Data/Data";
import Cart from "../Cart/Cart";
import { CartProvider } from "react-use-cart";


const Products = () => {
  const [data, setData] = useState(Data.ProductData);
  const filterResult =(catItem)=> {
    const result=Data.ProductData.filter((curData)=> {
        return curData.category===catItem;
    });
    setData(result);
  }
  return (
    <>
      <CartProvider>
        <h1 className="text-center mt-3"> All Items </h1>
        <div className="container-fluid mx-2">
          <div className="row mt-5 mx-2">
            <div className="col-md-3">
              <button className="btn btn-warning w-100 mb-3" onClick={()=> filterResult('Classic')}>Classic</button>
              <button className="btn btn-warning w-100 mb-3" onClick={()=> filterResult('Running')}>Running</button>
              <button className="btn btn-warning w-100 mb-3" onClick={()=> filterResult('Jordan')}>Jordan</button>
              <button className="btn btn-warning w-100 mb-3">
                Training & Gym
              </button>
            </div>
            <div className="col-md-9">
              <div className="row">
                      {Data.ProductData.map((item, index, values) => {
                        const {id,title,price,img} = values;
                        return (
                          <Itemcard
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            category={item.category}
                            key={index}
                          />
                        );
                      })}
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </CartProvider>
    </>
  );
};

export default Products;
