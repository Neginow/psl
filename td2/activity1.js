// Define the User class
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Add the sayHello method to the User prototype
User.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Instantiate a few users
const user1 = new User('Alice', 30);
const user2 = new User('Bob', 25);
const user3 = new User('Charlie', 35);

// Call their sayHello method
user1.sayHello();
user2.sayHello();
user3.sayHello();