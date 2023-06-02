const arr = [1, 2, 3, 4, 5, 6, 7];
const arrStr = ['abc', 'def', 'ghj', 'klm', 'nop'];

// // 1. map() returns a new array based on a function:
// const arrMap = arr.map((n) => n * 3);
// console.log(arrMap);

// // 2. filter():
// const arrFiltered = arr.filter((n) => n >= 3);
// console.log(arrFiltered);

// // 3. find()
// const arrFind = arr.find((n) => n === 4);
// console.log(arrFind);
// // or return the first element which maches the condition:
// const arrFind2 = arr.find((n) => n > 4);
// console.log(arrFind2);

//// 4. reduce():
// reduce() is good when we want to end with only 1 value
// 0 is the first element for starting accumulating the sum of the numbers:
// const arrReduce = arr.reduce(
//   (accumulator, currElement) => accumulator + currElement,
//   0
// );
// console.log(arrReduce);

///////////////////////////////////////////////////////
// // Promises:
// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     setTimeout(() => {
//       resolve('I have succeeded.');
//     }, 1000);
//   } else {
//     reject('I have failed.');
//   }
// });

// myPromise
//   .then((value) => console.log(value))
//   .catch((rejectedValue) => console.log(rejectedValue));

//// Before: fetch().then()...
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) => {
//     const firstUser = users[0];
//     console.log(firstUser);

//     return fetch(
//       'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
//     );
//   })
//   .then((response) => response.json())
//   .then((posts) => console.log(posts));

// //// Now:
// const asyncFunc = async () => {
//   try {
//     const resonseUsers = await fetch(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     const users = await resonseUsers.json();
//     const userSecond = users[1];
//     console.log(userSecond);

//     const responsePosts = await fetch(
//       'https://jsonplaceholder.typicode.com/posts?userId=' + userSecond.id
//     );
//     const posts = await responsePosts.json();
//     console.log(posts);
//   } catch (error) {
//     console.log('There is an error: ' + error);
//   }
// };

// asyncFunc();
/////////////////////////////////////////////////////////

//// Classes:
// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }

//   attack() {
//     return 'attack with ' + this.weapon;
//   }
// }

// const petya = new Elf('Petya', 'stones');
// console.log(petya);
// console.log(petya.name);
// console.log(petya.attack());

//// Instantiation

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby);

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  makeFort() {
    return `${this.name} the ${this.color} made the strongest fort.`;
  }
}

const forty = new Ogre('Forty', 'rocks', 'grey');
console.log(forty);
console.log(forty.makeFort());
