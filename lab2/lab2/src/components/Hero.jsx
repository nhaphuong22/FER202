function Hero() {
  return (
    <section id="home" className="mb-5">
      <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#pizzaCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#pizzaCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#pizzaCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80"
              className="d-block w-100"
              alt="Neapolitan Pizza"
            />
            <div className="carousel-caption d-block">
              <h1 className="fw-bold">Neapolitan Pizza</h1>
              <p>
                If you are looking for a traditional Italian pizza, the Neapolitan is the best option!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1600&q=80"
              className="d-block w-100"
              alt="Delightful Margherita"
            />
            <div className="carousel-caption d-block">
              <h1 className="fw-bold">Delightful Margherita</h1>
              <p>
                A simple yet delicious classic tomato, mozzarella, and basil combination.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1600&q=80"
              className="d-block w-100"
              alt="Gourmet Mushroom Pizza"
            />
            <div className="carousel-caption d-block">
              <h1 className="fw-bold">Gourmet Mushroom Pizza</h1>
              <p>
                Fresh, premium mushrooms baked with a luxurious blend of melting cheeses.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
