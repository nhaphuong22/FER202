function BookingSection() {
  return (
    <section id="contact" className="container pb-5">
      <div className="text-center mb-4">
        <h2 className="booking-title text-white fw-bold fs-1">Book Your Table</h2>
      </div>
      <div className="booking-section-wrapper">
        <form>
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name *"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email *"
                required
              />
            </div>
            <div className="col-md-4">
              <select className="form-select" defaultValue="default" required>
                <option value="default" disabled>
                  Select a Service
                </option>
                <option>Lunch Reservation</option>
                <option>Dinner Reservation</option>
                <option>Private Party</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="6"
              placeholder="Please write your comment"
            />
          </div>
          <button type="submit" className="btn-send-message">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingSection;
