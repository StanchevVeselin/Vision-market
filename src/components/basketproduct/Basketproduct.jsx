import "./basketproduct.css";

import { useStateValue } from "../../utils/stateProvider";

function Basketproduct ({id,name,description,price,image}) {
  const [{basket}, dispatch] = useStateValue()
  const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id
      })
  }

 
  
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__description">{description}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default Basketproduct;
