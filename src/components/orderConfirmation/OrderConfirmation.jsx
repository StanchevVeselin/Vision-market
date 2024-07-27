import { Link, useLocation } from "react-router-dom";
import "./orderConfirmation.css"

function OrderConfirmation() {
    const location = useLocation();
    const orderId = location.state?.orderId;

    return (
        <div className="orderConfirmation">
            <h1>Вашата поръчка е завършена!</h1>
            <p>Вашата поръчка е завършена успешно. Номер на поръчката: {orderId}</p>
            <p>Благодарим Ви за вашата поръчка!</p>
            <Link to="/">
                <button>Върнете се на главната страница</button>
            </Link>
        </div>
    );
}

export default OrderConfirmation;