import { companiesData } from './arrayMethods'; // Import dữ liệu từ file mảng

export const runES6Functions = () => {
  console.log("============= 2. ES6 FUNCTIONS =============");

  // --- Object Destructuring ---
  const { name, category } = companiesData[0];
  const newObj = {
    name,
    category,
    print() { console.log(`Name: ${this.name}`); }
  };
  console.log("11. Object mới từ company[0]:");
  newObj.print();

  // --- Rest & Spread Parameters ---
  const sumArgs = (...args) => args.reduce((acc, val) => acc + val, 0);
  console.log("12. Tổng các tham số (1, 2, 3, 4):", sumArgs(1, 2, 3, 4));

  const flattenArgs = (...args) => {
    return args.reduce((acc, val) => {
      return Array.isArray(val) ? [...acc, ...val] : [...acc, val];
    }, []);
  };
  console.log("13. Flatten tham số:", flattenArgs(1, [2, 3], 'test', [4, 5]));

  // --- Nested Destructuring ---
  const person = { name: "Costas", address: { street: "Lalaland 12" } };
  const { address: { street } } = person;
  console.log("14. Destructure street:", street);

  // --- Closures (Hàm đếm tăng dần) ---
  const createCounter = () => {
    let count = 0;
    return () => count++;
  };
  const counter = createCounter();
  console.log("15. Counter increments:", counter(), counter(), counter());

  // --- Xử lý URL Query Params ---
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
};