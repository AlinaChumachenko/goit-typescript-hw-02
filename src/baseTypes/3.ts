let some: unknown = "Text";
let str: string;
if (typeof some === "string") {
  str = some; // OK, тепер ми знаємо, що це рядок
}

export {};

// let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === 'string') {
//   console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
// }
