export const runPromiseTask = () => {
  console.log("============= 4. PROMISES =============");

  const myPromise = new Promise((resolve, reject) => {
    // Tạo số ngẫu nhiên từ 1 đến 10
    const randomNum = Math.floor(Math.random() * 10) + 1; 
    
    if (randomNum > 5) {
      resolve(`Success: Number is ${randomNum}`);
    } else {
      reject(`Error (Number was ${randomNum})`);
    }
  });

  myPromise
    .then(result => console.log("Promise resolved:", result))
    .catch(error => console.log("Promise rejected:", error));
};