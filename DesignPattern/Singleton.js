// What is Singleton Pattern?
// Singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
// The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or that restrict the instantiation to a certain number of objects.

// How to implement Singleton Pattern in JavaScript?

// There are several ways to implement Singleton Pattern in JavaScript. Below are some of the ways:
// 1. Using a simple object literal
// 2. Using a class

// Using a simple object literal
// The simplest way to create a singleton is to create a simple object literal. This approach is useful when you want to create a single object and do not need to instantiate it multiple times.

const singleton = {
  prop1: "value1",
  prop2: "value2",
  method1: function () {
    console.log("method1");
  },
};

// Using a class
// You can also create a singleton using a class. This approach is useful when you want to create a single object and need to instantiate it multiple times.

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log(singleton1 === singleton2); // true

// Example of Singleton Pattern in JavaScript
// In this example, we will create a singleton class that represents a database connection. The class will have a method to connect to the database and a method to execute a query.

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
  }

  connect() {
    console.log("Connecting to the database...");
  }

  query(sql) {
    console.log(`Executing query: ${sql}`);
  }
}

const db1 = new Database();
const db2 = new Database();

db1.connect();
db2.query("SELECT * FROM users");
console.log(db1 === db2); // true
