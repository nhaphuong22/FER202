import React, { useState } from "react";
import GridTest from "./components/GridTest";
import FirstPage from "./components/FirstPage";
import FptSimple from "./components/FptSimple";
import StudentsDetail from "./components/StudentsDetail";

function App() {
  const [activeTab, setActiveTab] = useState("grid");

  return (
    <div>
      {/* Menu chuyển trang nhanh */}
      <div className="bg-dark p-2 d-flex justify-content-center gap-2 sticky-top">
        <button
          className={`btn btn-sm ${activeTab === "grid" ? "btn-warning" : "btn-outline-light"}`}
          onClick={() => setActiveTab("grid")}
        >
          Grid Test (Bài 1 & 3)
        </button>
        <button
          className={`btn btn-sm ${activeTab === "first" ? "btn-warning" : "btn-outline-light"}`}
          onClick={() => setActiveTab("first")}
        >
          First Page (Bài 2)
        </button>
        <button
          className={`btn btn-sm ${activeTab === "fptSimple" ? "btn-warning" : "btn-outline-light"}`}
          onClick={() => setActiveTab("fptSimple")}
        >
          FPT Simple (Bài 4)
        </button>
        <button
          className={`btn btn-sm ${activeTab === "students" ? "btn-warning" : "btn-outline-light"}`}
          onClick={() => setActiveTab("students")}
        >
          Students Detail (Bài 5)
        </button>
      </div>

      {/* Khu vực render nội dung bài tập */}
      <main>
        {activeTab === "grid" && <GridTest />}
        {activeTab === "first" && <FirstPage />}
        {activeTab === "fptSimple" && <FptSimple />}
        {activeTab === "students" && <StudentsDetail />}
      </main>
    </div>
  );
}

export default App;
