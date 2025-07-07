import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";
import BurgerMeals from "./BurgerMeals.jsx";
import SandwichMeals from "./SandwichMeals.jsx";
import Pasta from "./Pasta.jsx";

export default function Meals({ activeCategory, onSelectCategory }) {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const categoryButtons = document.querySelector(".category-buttons");

      if (categoryButtons) {
        if (
          scrollTop >
          categoryButtons.offsetTop + categoryButtons.offsetHeight
        ) {
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

  const pizzaMeals = [
    {
      id: "m1",
      name: "Mac & Cheese",
      price: "8.99",
      description:
        "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      image: "/images/mac-and-cheese.jpg",
    },
    {
      id: "m2",
      name: "Margherita Pizza",
      price: "12.99",
      description:
        "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
      image: "images/margherita-pizza.jpg",
    },
    {
      id: "m3",
      name: "Caesar Salad",
      price: "7.99",
      description:
        "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
      image: "images/caesar-salad.jpg",
    },
    {
      id: "m4",
      name: "Spaghetti Carbonara",
      price: "10.99",
      description:
        "Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.",
      image: "images/spaghetti-carbonara.jpg",
    },
    {
      id: "m5",
      name: "Veggie Burger",
      price: "9.99",
      description:
        "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",
      image: "images/veggie-burger.jpg",
    },
    {
      id: "m6",
      name: "Grilled Chicken Sandwich",
      price: "10.99",
      description:
        "Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.",
      image: "images/grilled-chicken-sandwich.jpg",
    },
    {
      id: "m7",
      name: "Steak Frites",
      price: "17.99",
      description:
        "Succulent steak cooked to your preference, served with crispy golden fries and herb butter.",
      image: "images/steak-frites.jpg",
    },
    {
      id: "m8",
      name: "Sushi Roll Platter",
      price: "15.99",
      description:
        "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
      image: "images/sushi-roll-platter.jpg",
    },
    {
      id: "m9",
      name: "Chicken Curry",
      price: "13.99",
      description:
        "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.",
      image: "images/chicken-curry.jpg",
    },
    {
      id: "m10",
      name: "Vegan Buddha Bowl",
      price: "11.99",
      description:
        "A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.",
      image: "images/vegan-buddha-bowl.jpg",
    },
    {
      id: "m11",
      name: "Seafood Paella",
      price: "19.99",
      description:
        "A Spanish delicacy filled with saffron-infused rice, shrimp, mussels, and chorizo.",
      image: "images/seafood-paella.jpg",
    },
    {
      id: "m12",
      name: "Pancake Stack",
      price: "8.99",
      description:
        "Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh berries.",
      image: "images/pancake-stack.jpg",
    },
    {
      id: "m13",
      name: "Miso Ramen",
      price: "12.99",
      description:
        "A warming bowl of ramen with miso broth, tender pork, soft-boiled egg, and green onions.",
      image: "images/miso-ramen.jpg",
    },
    {
      id: "m14",
      name: "Beef Tacos",
      price: "9.99",
      description:
        "Three soft tortillas filled with seasoned beef, fresh salsa, cheese, and sour cream.",
      image: "images/beef-tacos.jpg",
    },
    {
      id: "m15",
      name: "Chocolate Brownie",
      price: "5.99",
      description:
        "A rich and fudgy brownie, topped with a scoop of vanilla ice cream and chocolate sauce.",
      image: "images/chocolate-brownie.jpg",
    },
    {
      id: "m16",
      name: "Lobster Bisque",
      price: "14.99",
      description:
        "A creamy soup made from lobster stock, aromatic vegetables, and a touch of brandy.",
      image: "images/lobster-bisque.jpg",
    },
    {
      id: "m17",
      name: "Mushroom Risotto",
      price: "13.99",
      description:
        "Creamy Arborio rice cooked with a medley of wild mushrooms and finished with parmesan.",
      image: "images/mushroom-risotto.jpg",
    },
    {
      id: "m18",
      name: "Eggplant Parmesan",
      price: "11.99",
      description:
        "Layers of breaded eggplant, marinara sauce, and melted mozzarella and parmesan cheeses.",
      image: "images/eggplant-parmesan.jpg",
    },
    {
      id: "m19",
      name: "Lemon Cheesecake",
      price: "6.99",
      description:
        "A creamy cheesecake with a tangy lemon flavor, served on a crumbly biscuit base.",
      image: "images/lemon-cheesecake.jpg",
    },
    {
      id: "m20",
      name: "Falafel Wrap",
      price: "8.99",
      description:
        "Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a tahini sauce.",
      image: "images/falafel-wrap.jpg",
    },
  ];

  const renderCategoryButtons = () => (
    <div className="category-button-container">
      <div
        className="category-button"
        onClick={() => onSelectCategory("pizza")}
      >
        <img src="/images/mac-and-cheese.jpg" alt="Pizza" />
        <button>Pizza</button>
      </div>
      <div
        className="category-button"
        onClick={() => onSelectCategory("burger")}
      >
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
          alt="Burger"
        />
        <button>Burger</button>
      </div>
      <div
        className="category-button"
        onClick={() => onSelectCategory("sandwich")}
      >
        <img
          src="https://images.pexels.com/photos/4491396/pexels-photo-4491396.jpeg"
          alt="Sandwich"
        />
        <button>Sandwich</button>
      </div>
      <div
        className="category-button"
        onClick={() => onSelectCategory("pasta")}
      >
        <img
          src="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
          alt="Pasta"
        />
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
        {activeCategory === "pizza" &&
          pizzaMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}

        {activeCategory === "burger" && <BurgerMeals />}
        {activeCategory === "sandwich" && <SandwichMeals />}
        {activeCategory === "pasta" && <Pasta />}
      </ul>
    </>
  );
}
