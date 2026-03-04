import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { name: "Aloe Vera", cost: "$10", image: "plant1.png", category: "Medicinal" },
  { name: "Tulsi", cost: "$12", image: "plant2.png", category: "Medicinal" },
  { name: "Lavender", cost: "$15", image: "plant3.png", category: "Aromatic" },
  { name: "Mint", cost: "$8", image: "plant4.png", category: "Aromatic" },
  { name: "Snake Plant", cost: "$18", image: "plant5.png", category: "Indoor" },
  { name: "Money Plant", cost: "$20", image: "plant6.png", category: "Indoor" }
];

function ProductList() {

  const dispatch = useDispatch();
  const CartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const calculateTotalQuantity = () => {
    return CartItems
      ? CartItems.reduce((total, item) => total + item.quantity, 0)
      : 0;
  };

  return (

    <div>

      <h2>Plants</h2>

      <h3>Cart Items: {calculateTotalQuantity()}</h3>

      <div className="plant-grid">

        {plants.map((plant, index) => {

          const isAdded = CartItems.find(
            item => item.name === plant.name
          );

          return (

            <div key={index} className="plant-card">

              <img src={plant.image} alt={plant.name} width="120"/>

              <h3>{plant.name}</h3>

              <p>{plant.cost}</p>

              <button
                onClick={() => handleAddToCart(plant)}
                disabled={isAdded}
              >
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </button>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default ProductList;