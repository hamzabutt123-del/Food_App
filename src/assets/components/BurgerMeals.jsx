import React from "react";
import MealItem from "./MealItem";
import { mealsData } from "./mealsData";

export default function BurgerMeals() {
  return (
    <ul id="meals">
      {mealsData.burger.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}