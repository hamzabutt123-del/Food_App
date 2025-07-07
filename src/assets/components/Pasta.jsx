import React, { useState } from "react";
import MealItem from "./MealItem";
export default function Pasta() {
  const [pastaMeal] = useState([
    {
      id: "m1",
      name: "Pasta",
      price: "2.99",
      image:
        "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
    },
    {
      id: "m2",
      name: "Spicy Pasta",
      price: "3.99",
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    },
    {
      id: "m3",
      name: "Cheese Pasta",
      price: "4.75",
      image:
        "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
    },
    {
      id: "m4",
      name: "Vegetable Pasta",
      price: "3.75",
      image:
        "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
    },
    {
      id: "m5",
      name: "Boiled Pasta",
      price: "2.75",
      image: "https://images.pexels.com/photos/14737/pexels-photo.jpg",
    },
    {
      id: "m6",
      name: "Salty Pasta",
      price: "2.50",
      image:
        "https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg",
    },
    {
      id: "m7",
      name: "Chicken Vegetable Pasta",
      price: "5.00",
      image:
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
    },
    {
      id: "m8",
      name: "Cheese Pasta",
      price: "4.75",
      image:
        "https://images.pexels.com/photos/5107161/pexels-photo-5107161.jpeg",
    },
  ]);
  return (
    <ul id="meals">
      {pastaMeal.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
