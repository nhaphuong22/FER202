import React from "react";
export default function Greeting() {
    return (<div>
      <span className="hello-text">Hello <span className="react-text">React</span></span>
      
      <div className="logo-container">
        {/* Dùng link ảnh tạm thời để hiển thị logo React */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="200" />
        <div className="logo-line"></div>
        <p className="logo-caption">This is the React logo!</p>
        <p className="logo-sub">(I don't know why it is here either)</p>
        <p style={{ marginTop: '20px' }}>The library for web and native user interfaces</p>
      </div>
    </div>
    );
}