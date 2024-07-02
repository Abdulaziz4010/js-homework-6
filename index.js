//     6. argument sifatida berilgan object ni key larinidan tashkil topgan array ni qaytaradigan function yarating 7. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin. 8. Ixtiyoriy object yaratilsin key va value lari 6 tadan kam bo'lmasin 1. value lar ro'yxati chiqarilsin 2. value larining yig'indisi topilsin

// let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// function arrFirst(...n) {}

// let originalArray = [1, 2, 3, 4, 5, 1, 6, 7, 9, 10];

// let newArray = [];

// for (let i = 0; i < originalArray.length; i++) {
//   if (originalArray[i] > 2) {
//     newArray.push(originalArray[i]);
//   }
// }
// console.log(newArray);

// 1. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring

// Boshlang'ich array
// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function arrey(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 2) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// console.log(arrey(originalArray));

// 2. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping

// Ixtiyoriy array yaratamiz
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumEvenNumbers(array) {
//   let sumEven = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       sumEven += array[i];
//     }
//   }
//   return sumEven;
// }

// function sumOddNumbers(array) {
//   let sumOdd = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       sumOdd += array[i];
//     }
//   }
//   return sumOdd;
// }

// let sumEven = sumEvenNumbers(array);
// let sumOdd = sumOddNumbers(array);

// let userNumber = parseInt(prompt("Son kiriting:"));

// let totalSum = sumEven + sumOdd;

// let difference = Math.abs(userNumber - totalSum);

// console.log("Array ichidagi juft sonlar yig'indisi:", sumEven);
// console.log("Array ichidagi toq sonlar yig'indisi:", sumOdd);
// console.log("Array ichidagi sonlar umumiy yig'indisi:", totalSum);
// console.log(
//   "Kiritilgan son bilan array yig'indisi o'rtasidagi farq:",
//   difference
// );

// 3. foydalanuvchi 2 ta son kiritadi va shu 2 ta son oralig’idagi juft sonlar yig’indisini chiqaruvchi algaritm tuzing faqat 1 son 2 son dan kichikligini tekshiring

// Foydalanuvchidan ikki son kiritishni so'raymiz
// let num1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let num2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

// if (num1 >= num2) {
//   console.log("Birinchi son ikkinchi sondan kichik bo'lishi kerak.");
// } else {
//   function sumEvenNumbersBetween(num1, num2) {
//     let sumEven = 0;
//     for (let i = num1; i <= num2; i++) {
//       if (i % 2 === 0) {
//         sumEven += i;
//       }
//     }
//     return sumEven;
//   }

//   let sumEven = sumEvenNumbersBetween(num1, num2);

//   console.log(`Juft sonlar yig'indisi ${num1} va ${num2} orasida:`, sumEven);
// }

// 4. function argument tiga berilgan qiymatlar orasida faqat number larni alohida array ga ko'chiring va return qiling
// function extractNumbers(...args) {
//   const numbersArray = args.filter((arg) => typeof arg === "number");
//   return numbersArray;
// }
// console.log(args);

// 5. argument sifatida berilgan object ni value larinidan tashkil topgan array ni qaytaradigan function yarating
// function getObjectValues(obj) {
//   return Object.values(obj);
// }

// const sampleObject = {
//   name: "Alice",
//   age: 25,
//   occupation: "Engineer",
// };

// console.log(getObjectValues(sampleObject));
