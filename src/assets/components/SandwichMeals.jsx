import React from "react";
import MealItem from "./MealItem";
import { mealsData } from "./mealsData";

export default function SandwichMeals() {
  return (
    <ul id="meals">
      {mealsData.sandwich.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
