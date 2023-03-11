import { Link } from "react-router-dom";
import './Cart.css';

const Cart =()=> {
    return(

<div class="row">
    <div class="card" >
            <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Oxford Shoe</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>  
            <Link to="/checkout" class="btn btn-primary">
                Buy Now
            </Link>    
            </div>
    </div>

    <div class="card" >
            <img src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Red Sneaker</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/checkout" class="btn btn-primary">
                Buy Now
                </Link>  
            </div>
    </div>

    <div class="card" >
            <img src="https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Blue Nike</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/checkout" class="btn btn-primary">
                Buy Now
                </Link> 
            </div>
    </div>
</div>

       
    )
}

export default Cart;