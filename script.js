// Цикл for, выводящий каждое второе число от 0 до 10:

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  
//   Цикл for, выводящий все числа от 55 до 20:

for (let i = 55; i >= 20; i--) {
    console.log(i);
  }

//   Вывести все числа из массива numbers:
const numbers = [3, 5, 11, 2, 8, 1, 6];

for (const num of numbers) {
  console.log(num);
}

// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат:

const numbers_squared = numbers.map(num => num * num);

// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared:

const last_elem = numbers_squared[numbers_squared.length - 1];

// Используя данные из объекта user, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’:

const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500,
  };
  
  const userInfo = `User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`;
  console.log(userInfo);