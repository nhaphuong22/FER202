// Export dữ liệu này ra để sử dụng trong file RetailCompanies.jsx
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

export const runArrayMethods = () => {
  console.log("============= 1. ARRAY METHODS =============");

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
};