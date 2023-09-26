import React, { useState } from "react";

function Item({ name, removeItem, id}) {

    return (
        <div className="item">
            <div className="left-item">
                <button className="remove-item" onClick={()=> removeItem(id)}></button>
                <span className="item-name">{name}</span>
            </div>
            <Counter />
        </div>
    );
}

const Counter = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrementQuantity = () =>
        setQuantity((currentQty) => currentQty + 1);
    const handleDecrementQuantity = () => {
        if (quantity > 0) setQuantity((currentQty) => currentQty - 1);
    };

    return (
        <div className="quantity">
            <span className="qty-label">QTY</span>

            <button className="increment" onClick={handleIncrementQuantity}>
                +
            </button>
            <button className="decrement" onClick={handleDecrementQuantity}>
                -
            </button>
            <span className="quantity-amount">{quantity}</span>
        </div>
    );
};

export default Item;
