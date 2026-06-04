function MenuSection({ items }) {
  return (
    <section className="container mb-5">
      <div className="mb-4">
        <h2 className="menu-title fw-bold text-white fs-1">Our Menu</h2>
      </div>
      <div className="row g-4">
        {items.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-xl-3">
            <div className="card h-100 pizza-card">
              <div className="pizza-card-img-wrapper">
                <img
                  src={item.image}
                  className="d-block w-100"
                  alt={item.title}
                />
                {item.tag && (
                  <span className="pizza-badge-yellow">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.title}</h5>
                  <div className="pizza-card-price-container">
                    {item.originalPrice ? (
                      <>
                        <span className="pizza-price-original">{item.originalPrice}</span>
                        <span className="pizza-price-sale">{item.price}</span>
                      </>
                    ) : (
                      <span className="pizza-price-regular">{item.price}</span>
                    )}
                  </div>
                </div>
                <button className="pizza-btn-buy">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;



