import React, { useState } from "react";
import MealItem from "./MealItem";
export default function SandwichMeals() {
  const [sandwichMeals] = useState([
    {
      id: "m1",
      name: "Boiled Egg Cheese Sandwich",
      price: "4.55",
      image:
        "https://images.pexels.com/photos/4491396/pexels-photo-4491396.jpeg",
    },
    {
      id: "m2",
      name: "Double Bread Cheese Sandwich",
      price: "4.00",
      image:
        "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
    },
    {
      id: "m3",
      name: "Cheese Sandwich",
      price: "4.75",
      image:
        "https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg",
    },
    {
      id: "m4",
      name: "Cheese Sandwich",
      price: "4.75",
      image:
        "https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg",
    },
    {
      id: "m5",
      name: "Vegetable Sandwich",
      price: "4.00",
      image: "https://images.pexels.com/photos/236813/pexels-photo-236813.jpeg",
    },
    {
      id: "m6",
      name: "Cheese Vegetable Sandwich with Fries",
      price: "6.75",
      image:
        "https://images.pexels.com/photos/1239347/pexels-photo-1239347.jpeg",
    },
    {
      id: "m7",
      name: "Grill Sandwich",
      price: "6.00",
      image:
        "https://images.pexels.com/photos/2161638/pexels-photo-2161638.jpeg",
    },
    {
      id: "m8",
      name: "Beef Patty sandwich",
      price: "10.00",
      image:
        "https://images.pexels.com/photos/2300034/pexels-photo-2300034.jpeg",
    },
  ]);
  return (
    <ul id="meals">
      {sandwichMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
