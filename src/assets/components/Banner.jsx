import { useState } from "react";
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    caption: "Delicious Pizza",
  },
  {
    image:
      "https://media.istockphoto.com/id/1498243668/photo/tasty-cheeseburger-with-lettuce-cheddar-cheese-tomato-and-pickles-burger-bun-with-sesame.jpg?s=2048x2048&w=is&k=20&c=M98uCHFxBVxBbGLW5UeN0ubVGYSLe_GAb-hSVPh6FBk=",
    caption: "Juicy Burgers",
  },
  {
    image:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_hybrid&w=740",
    caption: "Creamy Pasta",
  },
];
export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <section className="banner">
      <div className="banner-promo">
        <h2>🔥 Hot Deals on Your Favorite Meals!</h2>
        <p>Order now and get 20% off on all pizzas!</p>
        <button className="banner-btn">Order Now</button>
      </div>

      <div className="banner-categories">
        <h3>🍴 Explore Categories</h3>
        <div className="slide">
          <img src={slides[currentIndex].image} alt="Slide" />
          <div className="caption">{slides[currentIndex].caption}</div>
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
