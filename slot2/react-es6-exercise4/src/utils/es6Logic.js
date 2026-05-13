export const companiesData = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

export const runES6Exercises = () => {
  console.log("============= BÀI TẬP ES6 =============");

  // --- Mảng People ---
  const people = [
    {name: 'Jack', age: 50}, {name: 'Michael', age: 9},
    {name: 'John', age: 40}, {name: 'Ann', age: 19}, {name: 'Elisabeth', age: 16}
  ];
  const isTeenager = (age) => age >= 10 && age <= 20;

  console.log("1. Người đầu tiên là teenager:", people.find(p => isTeenager(p.age)));
  console.log("2. Tất cả teenager:", people.filter(p => isTeenager(p.age)));
  console.log("3. Mọi người đều là teenager?", people.every(p => isTeenager(p.age)));
  console.log("4. Có ai là teenager không?", people.some(p => isTeenager(p.age)));

  // --- Mảng Đơn Giản ---
  const array = [1, 2, 3, 4];
  console.log("5. Tổng mảng [1,2,3,4]:", array.reduce((acc, curr) => acc + curr, 0));

  // --- Mảng Companies & Ages ---
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  console.log("6. Tên các công ty:");
  companiesData.forEach(c => console.log(c.name));
  
  console.log("7. Công ty bắt đầu sau 1987:");
  companiesData.filter(c => c.start > 1987).forEach(c => console.log(c.name));
  
  console.log("8. Sort công ty theo năm kết thúc (tăng dần):", 
    [...companiesData].sort((a, b) => a.end - b.end)
  );
  
  console.log("9. Sort ages (giảm dần):", [...ages].sort((a, b) => b - a));
  
  console.log("10. Tổng các ages:", ages.reduce((acc, age) => acc + age, 0));

  // --- Object Destructuring ---
  const { name, category } = companiesData[0];
  const newObj = {
    name,
    category,
    print() { console.log(`Name: ${this.name}`); }
  };
  console.log("11. Object mới từ company[0]:");
  newObj.print();

  // --- ES6 Functions ---
  const sumArgs = (...args) => args.reduce((acc, val) => acc + val, 0);
  console.log("12. Tổng các tham số (1, 2, 3, 4):", sumArgs(1, 2, 3, 4));

  const flattenArgs = (...args) => {
    return args.reduce((acc, val) => {
      return Array.isArray(val) ? [...acc, ...val] : [...acc, val];
    }, []);
  };
  console.log("13. Flatten tham số:", flattenArgs(1, [2, 3], 'test', [4, 5]));

  const person = { name: "Costas", address: { street: "Lalaland 12" } };
  const { address: { street } } = person;
  console.log("14. Destructure street:", street);

  const createCounter = () => {
    let count = 0;
    return () => count++;
  };
  const counter = createCounter();
  console.log("15. Counter increments:", counter(), counter(), counter());

  const getQueryParams = (url) => {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    return queryString.split('&').reduce((acc, param) => {
      const [key, value] = param.split('=');
      acc[key] = value;
      return acc;
    }, {});
  };
  console.log("16. Query Params object:", getQueryParams("http://test.com?id=1&name=React"));

  console.log("============= CLASSES & PROMISES =============");

  // --- Classes (OOP) ---
  class Shape {
    constructor(color) { this.color = color; }
    getArea() { return 0; }
    toString() { return `Color: ${this.color}`; }
  }

  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }
    getArea() { return this.length * this.width; }
    toString() { return `Rectangle [Color: ${this.color}, Area: ${this.getArea()}]`; }
  }

  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
    getArea() { return 0.5 * this.base * this.height; }
    toString() { return `Triangle [Color: ${this.color}, Area: ${this.getArea()}]`; }
  }

  console.log(new Rectangle("Red", 10, 5).toString());
  console.log(new Triangle("Blue", 10, 5).toString());

  // --- Promises ---
  const myPromise = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10) + 1; // Số ngẫu nhiên từ 1 - 10
    if (randomNum > 5) {
      resolve(`Success: Number is ${randomNum}`);
    } else {
      reject("Error");
    }
  });

  myPromise
    .then(result => console.log("Promise resolved:", result))
    .catch(error => console.log("Promise rejected:", error));
};