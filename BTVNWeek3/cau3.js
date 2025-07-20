const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// nhập chuỗi 
rl.question('Nhập các phần tử: ', (input) => {
  //  mảng số nguyên
  const numbers = input.trim().split(/\s+/).map(Number);

  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log('Các số chẵn:', evenNumbers);

  const maxNumber = Math.max(...numbers);
  console.log('Số lớn nhất trong mảng:', maxNumber);
  
  const positiveNumbers = numbers.filter(num => num > 0);
  console.log('Các số lớn hơn 0:', positiveNumbers);

  rl.close();
});
