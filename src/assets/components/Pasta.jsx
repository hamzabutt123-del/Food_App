import React from "react";
import MealItem from "./MealItem";
import { mealsData } from "./mealsData";

export default function Pasta() {
  return (
    <ul id="meals">
      {mealsData.pasta.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
