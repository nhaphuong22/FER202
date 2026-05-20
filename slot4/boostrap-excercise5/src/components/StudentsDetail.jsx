import React from "react";
import { studentsData } from "../data/studentsData"; // Import dữ liệu từ file .js

const StudentsDetail = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        paddingBottom: "0px",
      }}
    >
      {/* Top Navbar màu cam */}
      <nav
        className="navbar navbar-dark px-3 py-2 shadow-sm"
        style={{ backgroundColor: "#e68a00" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand mb-0 h1 fs-6 fw-bold d-flex align-items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg" 
              alt="FPT Logo" 
              style={{ height: "24px", background: "white", padding: "2px", borderRadius: "3px" }} 
            />
            FPT University
          </span>

          {/* Menu chữ nhỏ nằm giữa */}
          <div
            className="text-white d-none d-md-flex gap-3"
            style={{ fontSize: "13px" }}
          >
            <span>
              <i className="fa-solid fa-house me-1"></i>Trang chủ
            </span>
            <span>
              <i className="fa-solid fa-graduation-cap me-1"></i>Ngành học
            </span>
            <span>
              <i className="fa-solid fa-user-plus"></i> Tuyển sinh
            </span>
            <span>
              <i className="fa-solid fa-users me-1"></i>Sinh viên
            </span>
          </div>

          {/* Ô tìm kiếm bên phải */}
          <div className="d-flex align-items-center gap-2">
            <label
              className="text-white mb-0 d-none d-sm-inline"
              style={{ fontSize: "13px" }}
            >
              Search:
            </label>
            <input
              type="text"
              className="form-control form-control-sm py-0"
              style={{ width: "150px", height: "24px" }}
            />
          </div>
        </div>
      </nav>

      {/* Banner ảnh tập thể sinh viên */}
      <div className="container my-3">
        <div className="p-1 rounded" style={{ backgroundColor: "#e68a00" }}>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
            alt="Group Banner"
            className="img-fluid w-100 rounded"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Breadcrumb điều hướng */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 bg-transparent p-0">
            <li className="breadcrumb-item">
              <a
                href="#home"
                className="text-decoration-none"
                style={{ color: "#e68a00" }}
              >
                Home
              </a>
            </li>
            <li className="breadcrumb-item active text-muted" aria-current="page">
              Students
            </li>
          </ol>
        </nav>
      </div>

      {/* Tiêu đề trang */}
      <div className="text-center my-4">
        <h2 className="fw-normal text-dark" style={{ letterSpacing: "0.5px" }}>
          Students Detail
        </h2>
      </div>

      {/* Danh sách thẻ sinh viên chia lưới (Grid) */}
      <div className="container mb-5">
        <div className="row g-4 justify-content-center">
          {studentsData.map((student) => (
            <div className="col-12 col-md-6" key={student.id}>
              <div className="card h-100 border-0 shadow-sm p-3">
                {/* Ảnh chân dung vuông vắn ở giữa */}
                <img
                  src={student.img}
                  className="card-img-top mx-auto rounded"
                  alt={student.name}
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body px-1 pb-0 pt-3">
                  {/* Mã sinh viên căn giữa */}
                  <h6 className="text-center text-secondary mb-3 fw-bold">
                    {student.id}
                  </h6>

                  {/* Tên và Địa phương đẩy sang 2 bên đối xứng */}
                  <div
                    className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3"
                    style={{ fontSize: "14px" }}
                  >
                    <span className="fw-semibold text-dark text-start">
                      {student.name}
                    </span>
                    <span className="text-muted text-end">
                      {student.location}
                    </span>
                  </div>

                  {/* Form điểm danh (Khắc phục lỗi hiển thị nhầm lẫn thẻ label) */}
                  <div
                    className="d-flex justify-content-center gap-4 mb-3"
                    style={{ fontSize: "14px" }}
                  >
                    <div className="form-check d-flex align-items-center gap-1">
                      <input
                        className="form-check-input mt-0"
                        type="radio"
                        name={`status-${student.id}`}
                        id={`absent-${student.id}`}
                      />
                      <label
                        className="form-check-label text-secondary"
                        htmlFor={`absent-${student.id}`}
                      >
                        Absent
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center gap-1">
                      <input
                        className="form-check-input mt-0"
                        type="radio"
                        name={`status-${student.id}`}
                        id={`present-${student.id}`}
                        defaultChecked
                      />
                      <label
                        className="form-check-label text-secondary"
                        htmlFor={`present-${student.id}`}
                      >
                        Present
                      </label>
                    </div>
                  </div>

                  {/* Nút submit màu cam */}
                  <div className="text-center">
                    <button
                      className="btn text-white px-4 py-1"
                      style={{
                        backgroundColor: "#e68a00",
                        fontSize: "14px",
                        borderRadius: "4px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer chi tiết (Đồng bộ chuẩn icon và màu sắc như ảnh đề bài) */}
      <footer
        className="text-white pt-4 pb-2"
        style={{ backgroundColor: "#e68a00" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Cột trái: Địa chỉ liên hệ */}
            <div
              className="col-12 col-md-6 text-start mb-3 mb-md-0 text-dark"
              style={{ fontSize: "13px", lineHeight: "1.6" }}
            >
              <h6 className="fw-bold mb-1">Our Address</h6>
              <p className="m-0">Khu đô thị FPT Đà Nẵng</p>
              <p className="m-0 text-white">
                <i className="fa-solid fa-phone me-1 text-dark"></i>{" "}
                +84023111111
              </p>
              <p className="m-0 text-white">
                <i className="fa-solid fa-mobile-screen me-1 text-dark"></i>{" "}
                +852 8765 4321
              </p>
              <p className="m-0 text-white">
                <i className="fa-solid fa-envelope me-1 text-dark"></i>{" "}
                fptudn@fpt.edu.vn
              </p>
            </div>

            {/* Cột phải: Các icon mạng xã hội */}
            <div className="col-12 col-md-6 text-md-end text-center text-dark fs-5 d-flex justify-content-md-end justify-content-center gap-3">
              <i className="fa-brands fa-google-plus-g cursor-pointer"></i>
              <i className="fa-brands fa-facebook-f cursor-pointer"></i>
              <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
              <i className="fa-brands fa-twitter cursor-pointer"></i>
              <i className="fa-brands fa-youtube cursor-pointer"></i>
              <i className="fa-solid fa-envelope cursor-pointer"></i>
            </div>
          </div>
          <hr className="bg-dark opacity-25" />
          <div className="text-center text-dark" style={{ fontSize: "12px" }}>
            © Copyright 2023
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentsDetail;
