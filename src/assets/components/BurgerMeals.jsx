import React, { useState } from "react";
import MealItem from "./MealItem";

export default function BurgerMeals() {
  const [burgerMeals] = useState([
    {
      id: "m1",
      name: "Beef Burger",
      price: "8.99",
      description: "Mighty Beef Burger with juice sauces.",
      image:
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    },
    {
      id: "m2",
      name: "Mighty Beef Burger",
      price: "8.99",
      description: "Mighty Beef Burger with extra juice sauces.",
      image:
        "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
    },
    {
      id: "m3",
      name: "Chicken Burger",
      price: "8.99",
      description: "Mighty Chicken Burger with juice sauces.",
      image: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg",
    },
    {
      id: "m4",
      name: "Mac & Cheese",
      price: "8.99",
      description: "Beef Burger with juice sauces and Fries.",
      image: "https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg",
    },
    {
      id: "m5",
      name: "Chicken Burger",
      price: "8.99",
      description: "Chicken Burger With Cold Drink.",
      image:
        "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg",
    },
    {
      id: "m6",
      name: "Chicken Burger with Cold Drink",
      price: "8.99",
      description: "Mighty Beef Burger With Cold Drink.",
      image:
        "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg",
    },
  ]);

  return (
    <ul id="meals">
      {burgerMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
