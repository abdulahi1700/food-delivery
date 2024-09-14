import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="placeorder">
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="mult-field">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Address email" />
          <input type="text" placeholder="Street" />
          <div className="mult-field">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="mult-field">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <div className="cart-totals">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-deatils">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-deatils">
                <p>Delivery Free</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-deatils">
                <p>Total</p>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
            </div>
            <button>PROCEED TO PAYMENTS </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
