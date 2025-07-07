import React from "react";

function FoodSlider() {
  const categories = [
    {
      id: "pizza",
      name: "Pizza",
      image: "/images/margherita-pizza.jpg",
    },
    {
      id: "burgers",
      name: "Burgers",
      image:
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    },
    {
      id: "sandwiches",
      name: "Sandwiches",
      image:
        "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
    },
    {
      id: "pasta",
      name: "Pasta",
      image:
        "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
    },
  ];

  return (
    <div className="food-slider-container">
      <h2 className="slider-title">Our Menu Categories</h2>
      <div className="food-slider">
        {categories.map((category, index) => (
          <a key={index} href={`#${category.id}`} className="slider-item">
            <img
              src={category.image}
              alt={category.name}
              className="slider-image"
            />
            <div className="slider-overlay">
              <h3>{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FoodSlider;
