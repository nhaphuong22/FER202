import React from "react";
const FptSimple = () => {
  return (
    <div>
      {/* Header màu cam và khối Logo trắng giữa màn hình */}
      <div
        className="text-center py-4 text-white"
        style={{ backgroundColor: "#e68a00" }}
      >
        <div className="bg-white d-inline-block p-3 rounded mb-2">
          <h2
            className="text-dark fw-bold m-0"
            style={{ letterSpacing: "1px" }}
          >
            FPT Education
          </h2>
          <h3 className="m-0" style={{ color: "#e68a00", fontWeight: "900" }}>
            FPT UNIVERSITY
          </h3>
        </div>
        {/* Menu liên kết */}
        <div className="mt-2">
          <a href="#home" className="text-white text-decoration-none mx-2">
            Home
          </a>
          <a href="#about" className="text-white text-decoration-none mx-2">
            About
          </a>
          <a href="#contact" className="text-white text-decoration-none mx-2">
            Contact
          </a>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="container text-center py-5">
        <section id="about" className="mb-5">
          <h2 className="fw-bold">About</h2>
          <p className="text-muted mt-3">
            This is the about section of the website.
          </p>
        </section>

        <section id="contact" className="mb-5">
          <h2 className="fw-bold">Contact</h2>
          <p className="text-muted mt-3">
            For any inquiries, please contact us at example@example.com.
          </p>
        </section>
      </div>

      {/* Chân trang */}
      <footer
        className="text-center py-3 text-white"
        style={{ backgroundColor: "#f2cc8f" }}
      >
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
};

export default FptSimple;
