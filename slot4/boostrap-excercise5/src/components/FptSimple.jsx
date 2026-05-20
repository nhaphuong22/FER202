import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FptSimple() {
  return (
    <div className="w-100 min-vh-100 d-flex flex-column justify-content-between bg-white">
      <div>
        {/* Banner màu cam với logo FPT (Bài 4) */}
        <div 
          className="py-5 text-center px-3" 
          style={{ backgroundColor: "#f27224" }}
        >
          {/* Hộp màu trắng chứa logo */}
          <div 
            className="d-inline-block bg-white p-3 mb-3 border rounded shadow-sm" 
            style={{ minWidth: "300px", maxWidth: "350px" }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg" 
              alt="FPT Education Logo" 
              className="img-fluid"
              style={{ maxHeight: "80px" }}
            />
          </div>

          {/* Links menu đơn giản ngay dưới logo */}
          <div className="d-flex justify-content-center gap-4 mt-2">
            <a href="#home" className="text-white text-decoration-none fw-semibold" style={{ fontSize: "14px" }}>
              Home
            </a>
            <a href="#about" className="text-white text-decoration-none fw-semibold" style={{ fontSize: "14px" }}>
              About
            </a>
            <a href="#contact" className="text-white text-decoration-none fw-semibold" style={{ fontSize: "14px" }}>
              Contact
            </a>
          </div>
        </div>

        {/* Nội dung giới thiệu ở giữa trang */}
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              {/* Phần About */}
              <h3 className="fw-bold mb-2 text-dark">About</h3>
              <p className="text-muted mb-5" style={{ fontSize: "15px" }}>
                This is the about section of the website.
              </p>

              {/* Phần Contact */}
              <h3 className="fw-bold mb-2 text-dark">Contact</h3>
              <p className="text-muted" style={{ fontSize: "15px" }}>
                For any inquiries, please contact us at <a href="mailto:example@example.com" className="text-decoration-none fw-semibold" style={{ color: "#f27224" }}>example@example.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer màu cam nhạt/vàng cát (Bài 4) */}
      <footer 
        className="py-3 text-center w-100" 
        style={{ backgroundColor: "#f9d79a", color: "#6c5328", fontSize: "14px", fontWeight: "500" }}
      >
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}
