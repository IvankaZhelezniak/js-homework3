// Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и
// возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и
// кол - во выполненных задач содержатся как свойства объекта в формате
// "имя": "кол-во задач".


// const findBestEmployee = function (employees) {
//   'use strict';
//   const arrayValues = Object.values(employees);
//   let biggest = arrayValues[0];
//   for (let i = 1; i < arrayValues.length; i += 1) {
//     if (arrayValues[i] > biggest) {
//       biggest = arrayValues[i];
//     }
//   }
//   let bestEmployee = "";
//   for (const key in employees) {
//     if (employees[key] === biggest) {
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };



// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// }; 
// //console.log(findBestEmployee(developers)); 
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// }; 
// //console.log(findBestEmployee(supports)); 
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }
// //console.log(findBestEmployee(sellers)); 
// // 'lux'  




// 2-рой вариант решения

// const findBestEmployee = function (employees) {
//    let result = '';
//   if (employees === {}) {
//     return result;
//   }
//   let bestHour = 0;
//   for (let key in employees) {
//     if (employees[key] !== bestHour) {
//       if (employees[key] > bestHour) {
//         bestHour = employees[key];
//         result = key;
//       }
//     } else {
//       result = `${result} & ${key}`;
//     }
//   }
//   return result;
// };


// 3-тий вариант решения 

// const findBestEmployee = function (employees) {
//   let bestEmployee = '';
//   let value = 0;
//   const keys = Object.keys(employees);
//   for (const key of keys) {
//     if (employees[key] > value) {
//       value = employees[key];
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };



// 4-тій вариант

// const findBestEmployee = function (employees) {
//     "use strict";
//     // Write code under this line
//     const tasks = Object.entries(employees);
//     if (tasks.length === 0) {
//         return "";
//     }
//     let moretask = tasks[0][1];
//     let employeeName = tasks[0][0];
//     for (const task of tasks) {
//         if (task[1] > moretask) {
//             moretask = task[1];
//             employeeName = task[0];
//         }
//     }
//     return employeeName;
// };





