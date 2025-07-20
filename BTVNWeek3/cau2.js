function tongSoLe(n) {
  let sum =0;
  for (let i = 1; i <=n; i+=2) {
    sum+=i;
  }
  return sum;
}
const n = parseInt(process.argv[2]);

if (isNaN(n)) {
  console.log("Nhập số nguyên:");
} else {
  console.log(`Tổng các số lẻ từ 1 đến ${n} là: ${tongSoLe(n)}`);
}
