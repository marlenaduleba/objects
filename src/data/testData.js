const nestedObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    hobbies: ["reading", "traveling", "photography"],
    friends: [
      {
        name: "Alice",
        age: 28
      },
      {
        name: "Bob",
        age: 32
      }
    ]
  };

  const objToClone = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    },
    hobbies: ["reading", "cooking", "traveling"],
    friends: new Set(["Alice", "Bob", "Charlie"]),
    preferences: new Map([
      ["food", "Italian"],
      ["music", "Jazz"]
    ])
  };
  
  
  module.exports = { nestedObject, objToClone };
  