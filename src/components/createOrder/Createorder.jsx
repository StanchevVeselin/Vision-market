import React, { useState } from "react";
import { useStateValue } from "../../utils/stateProvider";
import "./createorder.css";
import Basketproduct from "../basketproduct/Basketproduct";
import { addDoc } from "firebase/firestore";
import { collOrders } from "../../../firebase";
function Createorder() {
    const [{ basket }, dispatch] = useStateValue();
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Получете данни от формата
        const formData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            email: event.target.email.value,
            products: basket // Предполагаме, че basket е масив с продукти
        };

        try {
            // Запишете данните в колекцията orders
            await addDoc(collOrders, formData);
            setMessage("Поръчката е успешно изпратена!");
            // Информирайте потребителя за успешното завършване на поръчката
            console.log("Успешно");

        } catch (error) {
            console.error("Грешка при записване на поръчката:", error);
            // Информирайте потребителя за грешка
            setMessage("Грешка при изпращане на поръчката. Моля, опитайте отново.");
        }
    };

    return (
        <div className="createOrder">
            <h1>Завършване на поръчката</h1>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label>Име</label>
                    <input type="text" name="firstName" required />
                </div>
                <div className="formGroup">
                    <label>Фамилия</label>
                    <input type="text" name="lastName" required />
                </div>
                <div className="formGroup">
                    <label>Телефон</label>
                    <input type="text" name="phone" required />
                </div>
                <div className="formGroup">
                    <label>Имейл</label>
                    <input type="text" name="email" required />
                </div>
                <div className="formGroup">
                    <label>Адрес за доставка</label>
                    <input type="text" name="address" required />
                </div>
                <div className="orderSummary">
                    <h2>Избрани продукти</h2>
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
                <button type="submit">Завърши поръчката</button>
            </form>
        </div>
    );
}

export default Createorder;