
import Subtotal from '../subtotal/Subtotal';
import './checkout.css';

import Basketproduct from '../basketproduct/Basketproduct';

import { useStateValue } from '../../utils/stateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue()
    console.log(basket);
  return (
    <div className="checkout">
                <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                        {basket.map(product => (
                            <Basketproduct 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            />
                        ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />    
            </div>
        </div>
    </div>
    
  )
}

export default Checkout;
