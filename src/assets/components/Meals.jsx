import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import BurgerMeals from "./BurgerMeals";
import SandwichMeals from "./SandwichMeals";
import Pasta from "./Pasta";
import { mealsData } from "./mealsData";

export default function Meals({ activeCategory, onSelectCategory }) {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const categoryButtons = document.querySelector(".category-buttons");

      if (categoryButtons) {
        if (scrollTop > categoryButtons.offsetTop + categoryButtons.offsetHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const renderCategoryButtons = () => (
    <div className="category-button-container">
      <div className="category-button" onClick={() => onSelectCategory("pizza")}>
        <img src="/images/mac-and-cheese.jpg" alt="Pizza" />
        <button>Pizza</button>
      </div>
      <div className="category-button" onClick={() => onSelectCategory("burger")}>
        <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" alt="Burger" />
        <button>Burger</button>
      </div>
      <div className="category-button" onClick={() => onSelectCategory("sandwich")}>
        <img src="https://images.pexels.com/photos/4491396/pexels-photo-4491396.jpeg" alt="Sandwich" />
        <button>Sandwich</button>
      </div>
      <div className="category-button" onClick={() => onSelectCategory("pasta")}>
        <img src="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg" alt="Pasta" />
        <button>Pasta</button>
      </div>
    </div>
  );

  return (
    <>
      <div className="category-buttons">{renderCategoryButtons()}</div>
      <div className={`sticky-categories ${isSticky ? "visible" : ""}`}>
        {renderCategoryButtons()}
      </div>
      <ul id="meals">
        {activeCategory === "pizza" && mealsData.pizza.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
        {activeCategory === "burger" && <BurgerMeals />}
        {activeCategory === "sandwich" && <SandwichMeals />}
        {activeCategory === "pasta" && <Pasta />}
      </ul>
    </>
  );
}