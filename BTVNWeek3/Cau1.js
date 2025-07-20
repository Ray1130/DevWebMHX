//kiểm tra số nguyên tố
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 
const args = process.argv.slice(2);
const input = parseInt(args[0]);

if (isNaN(input)) {
  console.log("Nhập một số nguyên.");
} else {
  if (isPrime(input)) {
    console.log(`${input} là số nguyên tố.`);
  } else {
    console.log(`${input} không phải là số nguyên tố.`);
  }
}
