import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
    const [items, setItems] = useState([
        {
            name: "Apples",
            id: 1,
        },
        {
            name: "Bananas",
            id: 2,
        },
        {
            name: "Box of Pasta",
            id: 3,
        },
        {
            name: "Cookies",
            id: 4,
        },
    ]);

    const handleRemoveItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="glocery-list">
            <Header title="Grocery list" itemTotal={items.length} />
            {items.map((item) => (
                <Item key={item.id} name={item.name} removeItem={handleRemoveItem} id={item.id}/>
            ))}
        </div>
    );
}

export default App;
