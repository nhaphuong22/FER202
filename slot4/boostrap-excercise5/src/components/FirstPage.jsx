import React from "react";
const FirstPage = () => {
  return (
    <div className="container-fluid p-0 text-center">
      {/* Khối tiêu đề */}
      <div className="bg-light py-5 mb-5 border-bottom">
        <h1 className="fw-normal">My First Bootstrap Page</h1>
      </div>

      {/* Khối hiển thị 3 Logo */}
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-6 col-md-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
              className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS3"
              className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="Bootstrap"
              className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
