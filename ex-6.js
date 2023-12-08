//Start coding here
//ให้แก้ไข Error ในโค้ด JavaScript ที่กำหนดให้ เพื่อให้โปรแกรมสามารถทำงานได้อย่างถูกต้อง
//โปรแกรมควรจะแสดงผลลัพธ์แบบนี้ทางหน้าจอ
//'Tax to be paid: $18000'
//'Tax to be paid: $6000'
function calculateTax(income) {
  let taxPercentage;
  let taxAmount;

  if (income > 50000) {
    taxPercentage = 0.3;
    taxAmount = income * taxPercentage;
    return taxAmount;
  }
  
  taxPercentage = 0.2;
  taxAmount = income * taxPercentage;
  return taxAmount;
}

const result1 = calculateTax(60000);
console.log("Tax to be paid: $" + result1);

const result2 = calculateTax(30000);
console.log("Tax to be paid: $" + result2);