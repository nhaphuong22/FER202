import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GridTest() {
  return (
    <div className="container py-3">
      {/* Menu Navigation ở trên cùng (Bài 3) */}
      <ul className="nav mb-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#active">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#link1">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#link2">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#disabled" tabIndex="-1" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>

      {/* Jumbotron block header */}
      <div className="p-5 mb-4 bg-light rounded-3 text-start">
        <h1 className="display-5 fw-bold text-dark m-0">Let's test the grid!</h1>
      </div>

      {/* Grid rows & columns layout */}
      <div className="container p-0 mb-4">
        {/* Row 1: col-8 và col-4 */}
        <div className="row g-0">
          <div className="col-8 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            First col
          </div>
          <div className="col-4 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            Second col
          </div>
        </div>

        {/* Row 2: col-3, col-6, col-3 */}
        <div className="row g-0">
          <div className="col-3 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            col
          </div>
          <div className="col-6 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            col
          </div>
          <div className="col-3 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            col
          </div>
        </div>

        {/* Row 3: bốn cột col-3 */}
        <div className="row g-0">
          <div className="col-3 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            col
          </div>
          <div className="col-3 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            col
          </div>
          <div className="col-3 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            col
          </div>
          <div className="col-3 bg-secondary-subtle border border-secondary-subtle p-3 text-start text-dark">
            col
          </div>
        </div>
      </div>

      {/* Footer "Created by ABC!" */}
      <div 
        className="w-100 py-3 text-center rounded" 
        style={{ backgroundColor: "#e2d6d6", color: "#333", fontWeight: "500" }}
      >
        Created by ABC!
      </div>
    </div>
  );
}
