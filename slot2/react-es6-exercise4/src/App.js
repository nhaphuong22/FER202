import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import JSXText from './components/JSXText';
import CourseList from './components/CourseList';
import RetailCompanies from './components/RetailCompanies';
import { companiesData, runArrayMethods } from './utils/arrayMethods';
import { runES6Functions } from './utils/es6Logic';
import { runOOPClasses } from './utils/oopClasses';
import { runPromiseTask } from './utils/promiseTask';
function App() {
  // Chạy các hàm ES6 khi App render lần đầu
  useEffect(() => {
    runArrayMethods();
    runES6Functions();
    runOOPClasses();
    runPromiseTask();
  }, []);
  return (
    <div>
      <Navbar />
      
      <div style={{ padding: '30px' }}>
        <Greeting />
        <br /><br />
        <JSXText />
        <br /><br />
        <CourseList />
        
        <br /><br />
        {/* DOM div append requirement */}
        <h3>Retail Companies (Incremented Start Year)</h3>
        <RetailCompanies companies={companiesData} />
      </div>
    </div>
  );
}

export default App;
