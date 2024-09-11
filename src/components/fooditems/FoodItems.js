import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItems.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItems = ({ id, name, price, description, image }) => {
  const [itemCounter, setItemCounter] = useState(0);
  const { cartItems, setCartItems, AddTocart, CartRemove } =
    useContext(StoreContext);
  return (
    <div className="fooditems">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => AddTocart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => CartRemove(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => AddTocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
