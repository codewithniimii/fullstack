// 📌 Objects in JavaScript
// Objects store key-value pairs and are used to structure data efficiently.

// ✅ Creating an Object
const person = {
    name: "Alice",        // String property
    age: 25,              // Number property
    isStudent: true,      // Boolean property
    hobbies: ["reading", "traveling"],  // Array property
    address: { city: "Paris", country: "France" },  // Nested object
    greet: function() {   // Method (Function inside an object)
        return `Hello, my name is ${this.name}`;
    }
};

// ✅ Accessing Object Properties
console.log(person.name);         // Output: Alice
console.log(person.hobbies[1]);   // Output: traveling
console.log(person.greet());      // Output: Hello, my name is Alice

// ✅ Adding a New Property
person.language = "French";

// ✅ Updating an Existing Property
person.age = 26;

// ✅ Deleting a Property
delete person.isStudent;

// ✅ Looping Through an Object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 📌 Objects are used in JS for data management, API responses, and storing configurations.
