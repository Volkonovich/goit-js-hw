import users from "./Task.js";

// console.log(users);

// ________1____________

// const getUserNames = users => {
//   users = users.map(users => users.name);
//   return users;
//   // твой код
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ________2_________

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(users => users.eyeColor === color);

// console.log(getUsersWithEyeColor(users, "blue"));
// // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ______3__________

// const getUsersWithGender = (users, gender) =>
//   users.filter(x => x.gender === gender).map(users => users.name);

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ________4_________

// const getInactiveUsers = users => users.filter(x => x.isActive === false);
// // твой код
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// _________5__________

// const getUserWithEmail = (users, email) =>
//   users.find(users => users.email === email);
// // твой код
// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// _________6________

// const getUsersWithAge = (users, min, max) =>
//   users.filter(users => users.age >= min && users.age <= max);
// // твой код
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ______7___________

// const calculateTotalBalance = users =>
//   users.reduce((acc, users) => (acc += users.balance), 0);
// // твой код
// console.log(calculateTotalBalance(users)); // 20916

// _________8_________

// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter(user => user.friends.includes(friendName))
//     .map(user1 => user1.name);

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// _________9_________
// const getNamesSortedByFriendsCount = users =>
//   users
//     .sort((a, b) => (a.friends.length > b.friends.length ? 1 : -1))
//     .map(users => users.name);

// // твой код
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// _______10___________

// const getSortedUniqueSkills = users =>
// users.reduce((acc, user) => {
//   acc.push(...user.skills);
//   return [...new Set(acc)];
// }, []);

// ;

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
