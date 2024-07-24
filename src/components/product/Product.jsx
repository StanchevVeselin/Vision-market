import { useContext } from "react"
import "./product.css"

import { useStateValue } from "../../utils/stateProvider"


function Product ({id,name,description,price,image}) {
    const[state,dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: name,
                description: description,
                price: price,
                image: image
            }
        })
    }

    return (
            <div className="product">
                        <img 
                        src={image}
                        alt="" className="product_img" />
                    <div className="product__info">
                        <p className="product__title">{name}</p>
                        <p className="product__price">${price}</p>
                        <p className="product__description">{description}</p>
                         <button onClick={addToBasket} className="aadd-to-cart-button"> 
                         <span>Add to BASKET</span>
                         </button>   
                    </div>
            </div>
        
    )
}

export default Product