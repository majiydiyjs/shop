import { Link } from "react-router-dom";
import './Checkout.css';

const Checkout =()=> {
    return(
    <div class="whpage">
            <form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Abdulaziz" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Muhammad" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Lahore</option>
      <option>Andijan</option>
      <option>Islamabad</option>
      <option>Tashkent</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>

<div class="d-block my-3">
  <div class="custom-control custom-radio">
    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required/>
    <label class="custom-control-label" for="credit">Credit card</label>
  </div>
  <div class="custom-control custom-radio">
    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
    <label class="custom-control-label" for="debit">Debit card</label>
  </div>
  <div class="custom-control custom-radio">
    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required/>
    <label class="custom-control-label" for="paypal">Paypal</label>
  </div>
</div>
<div class="row">
  <div class="col-md-6 mb-3">
    <label for="cc-name">Name on card</label>
    <input type="text" class="form-control" id="cc-name" placeholder="" required/>
    <small class="text-muted">Full name as displayed on card</small>
    <div class="invalid-feedback">
      Name on card is required
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <label for="cc-number">Credit card number</label>
    <input type="text" class="form-control" id="cc-number" placeholder="" required/>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-3 mb-3">
    <label for="cc-expiration">Expiration</label>
    <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
    <div class="invalid-feedback">
      Expiration date required
    </div>
  </div>
  <div class="col-md-3 mb-3">
    <label for="cc-expiration">CVV</label>
    <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
    <div class="invalid-feedback">
      Security code required
    </div>
  </div>
</div>
<hr class="mb-4"/>
<button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
</form>

        </div>

       
    )
}

export default Checkout;