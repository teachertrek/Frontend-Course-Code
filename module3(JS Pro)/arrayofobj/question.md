# JS Interview Questions: Array of Objects

Below are 20 interview questions with multiple input/output examples on arrays of objects in JavaScript. Each problem includes real-world scenarios and detailed descriptions to help you understand the context and requirements.WW

---

## Question 1 — Filter by Property
**Problem:** You're building a user management system for an e-commerce platform. You need to filter users based on specific criteria. Given an array of user objects, create a function that returns only those users whose age meets or exceeds a minimum age requirement. This is commonly used for age-restricted content, legal compliance, or targeted marketing campaigns.

**Example 1 - Filter users by minimum age:**
**Input:**
```js
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 }
];
const minAge = 25;
```

**Expected Output:**
```js
[
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
]
```



**Example 3 - Filter employees by department:**
**Input:**
```js
const employees = [
  { id: 1, name: "John", department: "Engineering", experience: 5 },
  { id: 2, name: "Sarah", department: "Marketing", experience: 3 },
  { id: 3, name: "Mike", department: "Engineering", experience: 8 },
  { id: 4, name: "Lisa", department: "HR", experience: 2 }
];
const targetDepartment = "Engineering";
```

**Expected Output:**
```js
[
  { id: 1, name: "John", department: "Engineering", experience: 5 },
  { id: 3, name: "Mike", department: "Engineering", experience: 8 }
]
```
---

## Question 2 — Sort by Property
**Problem:** You're developing a product catalog for an online store. Customers need to sort products by different criteria like price, name, or rating. Implement a function that sorts an array of product objects by a specified property in ascending or descending order. This functionality is essential for e-commerce platforms to help users find products within their budget or preferences.

**Example 1 - Sort products by price (ascending):**
**Input:**
```js
const products = [
  { name: "Keyboard", price: 29, rating: 4.2 },
  { name: "Monitor", price: 199, rating: 4.8 },
  { name: "Mouse", price: 19, rating: 4.0 }
];
const sortBy = "price";
const order = "asc";
```

**Expected Output:**
```js
[
  { name: "Mouse", price: 19, rating: 4.0 },
  { name: "Keyboard", price: 29, rating: 4.2 },
  { name: "Monitor", price: 199, rating: 4.8 }
]
```

**Example 2 - Sort students by grade (descending):**
**Input:**
```js
const students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 92, subject: "Science" },
  { name: "Charlie", grade: 78, subject: "English" },
  { name: "Diana", grade: 95, subject: "History" }
];
const sortBy = "grade";
const order = "desc";
```

**Expected Output:**
```js
[
  { name: "Diana", grade: 95, subject: "History" },
  { name: "Bob", grade: 92, subject: "Science" },
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Charlie", grade: 78, subject: "English" }
]
```

**Example 3 - Sort employees by name (alphabetical):**
**Input:**
```js
const employees = [
  { name: "Zoe", position: "Developer", salary: 75000 },
  { name: "Alex", position: "Designer", salary: 65000 },
  { name: "Mike", position: "Manager", salary: 90000 },
  { name: "Sarah", position: "Analyst", salary: 60000 }
];
const sortBy = "name";
const order = "asc";
```

**Expected Output:**
```js
[
  { name: "Alex", position: "Designer", salary: 65000 },
  { name: "Mike", position: "Manager", salary: 90000 },
  { name: "Sarah", position: "Analyst", salary: 60000 },
  { name: "Zoe", position: "Developer", salary: 75000 }
]
```
---

## Question 3 — Find Max/Min Object by Property
**Problem:** You're building an analytics dashboard for a company's HR department. You need to identify the highest and lowest performing employees, products with the best/worst ratings, or items with the highest/lowest values. Create a function that finds the object with the maximum or minimum value for a specified property. This is crucial for business intelligence, performance tracking, and data analysis.

**Example 1 - Find employee with highest salary:**
**Input:**
```js
const employees = [
  { name: "Dave", salary: 50000, department: "Engineering" },
  { name: "Eva", salary: 75000, department: "Management" },
  { name: "Frank", salary: 60000, department: "Sales" },
  { name: "Grace", salary: 45000, department: "Marketing" }
];
const property = "salary";
const type = "max";
```

**Expected Output:**
```js
{ name: "Eva", salary: 75000, department: "Management" }
```

**Example 2 - Find product with lowest rating:**
**Input:**
```js
const products = [
  { name: "Laptop", price: 999, rating: 4.2, reviews: 150 },
  { name: "Phone", price: 699, rating: 3.8, reviews: 89 },
  { name: "Tablet", price: 399, rating: 4.7, reviews: 203 },
  { name: "Watch", price: 299, rating: 3.2, reviews: 45 }
];
const property = "rating";
const type = "min";
```

**Expected Output:**
```js
{ name: "Watch", price: 299, rating: 3.2, reviews: 45 }
```

**Example 3 - Find student with highest score:**
**Input:**
```js
const students = [
  { name: "Alice", subject: "Math", score: 95, grade: "A" },
  { name: "Bob", subject: "Science", score: 87, grade: "B+" },
  { name: "Charlie", subject: "English", score: 92, grade: "A-" },
  { name: "Diana", subject: "History", score: 78, grade: "C+" }
];
const property = "score";
const type = "max";
```

**Expected Output:**
```js
{ name: "Alice", subject: "Math", score: 95, grade: "A" }
```
---

## Question 4 — Remove Duplicates by Key
**Problem:** You're working on a data cleaning system for a customer database. Due to system errors or data imports, you might have duplicate records with the same unique identifier (like customer ID, product ID, or email). Create a function that removes duplicate objects from an array based on a specified key property, keeping only the first occurrence of each unique key. This is essential for maintaining data integrity and preventing duplicate entries in databases.

**Example 1 - Remove duplicate products by ID:**
**Input:**
```js
const items = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 1, name: "Laptop Pro", price: 1299 },
  { id: 3, name: "Keyboard", price: 75 },
  { id: 2, name: "Wireless Mouse", price: 35 }
];
const key = "id";
```

**Expected Output:**
```js
[
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
]
```

**Example 2 - Remove duplicate users by email:**
**Input:**
```js
const users = [
  { email: "john@example.com", name: "John", age: 30 },
  { email: "jane@example.com", name: "Jane", age: 25 },
  { email: "john@example.com", name: "Johnny", age: 32 },
  { email: "bob@example.com", name: "Bob", age: 28 },
  { email: "jane@example.com", name: "Jane Smith", age: 27 }
];
const key = "email";
```

**Expected Output:**
```js
[
  { email: "john@example.com", name: "John", age: 30 },
  { email: "jane@example.com", name: "Jane", age: 25 },
  { email: "bob@example.com", name: "Bob", age: 28 }
]
```

**Example 3 - Remove duplicate orders by order number:**
**Input:**
```js
const orders = [
  { orderNumber: "ORD001", customer: "Alice", amount: 150 },
  { orderNumber: "ORD002", customer: "Bob", amount: 200 },
  { orderNumber: "ORD001", customer: "Alice", amount: 175 },
  { orderNumber: "ORD003", customer: "Charlie", amount: 300 },
  { orderNumber: "ORD002", customer: "Bob", amount: 225 }
];
const key = "orderNumber";
```

**Expected Output:**
```js
[
  { orderNumber: "ORD001", customer: "Alice", amount: 150 },
  { orderNumber: "ORD002", customer: "Bob", amount: 200 },
  { orderNumber: "ORD003", customer: "Charlie", amount: 300 }
]
```
---

## Question 5 — Group by Property
**Problem:** You're developing a reporting system for a company with employees across multiple departments, cities, or categories. You need to organize data by grouping objects that share the same value for a specific property. This is commonly used for creating reports, dashboards, and data visualization where you need to see how data is distributed across different categories. Create a function that groups an array of objects by a specified property.

**Example 1 - Group employees by department:**
**Input:**
```js
const employees = [
  { name: "Alan", department: "Engineering", salary: 75000 },
  { name: "Bella", department: "Marketing", salary: 65000 },
  { name: "Chris", department: "Engineering", salary: 80000 },
  { name: "Diana", department: "HR", salary: 60000 },
  { name: "Eve", department: "Marketing", salary: 70000 }
];
const groupBy = "department";
```

**Expected Output:**
```js
{
  Engineering: [
    { name: "Alan", department: "Engineering", salary: 75000 },
    { name: "Chris", department: "Engineering", salary: 80000 }
  ],
  Marketing: [
    { name: "Bella", department: "Marketing", salary: 65000 },
    { name: "Eve", department: "Marketing", salary: 70000 }
  ],
  HR: [
    { name: "Diana", department: "HR", salary: 60000 }
  ]
}
```

**Example 2 - Group products by category:**
**Input:**
```js
const products = [
  { name: "iPhone", category: "Electronics", price: 999 },
  { name: "T-Shirt", category: "Clothing", price: 25 },
  { name: "Laptop", category: "Electronics", price: 1299 },
  { name: "Jeans", category: "Clothing", price: 80 },
  { name: "Book", category: "Education", price: 15 }
];
const groupBy = "category";
```

**Expected Output:**
```js
{
  Electronics: [
    { name: "iPhone", category: "Electronics", price: 999 },
    { name: "Laptop", category: "Electronics", price: 1299 }
  ],
  Clothing: [
    { name: "T-Shirt", category: "Clothing", price: 25 },
    { name: "Jeans", category: "Clothing", price: 80 }
  ],
  Education: [
    { name: "Book", category: "Education", price: 15 }
  ]
}
```

**Example 3 - Group students by grade:**
**Input:**
```js
const students = [
  { name: "Alice", grade: "A", subject: "Math", score: 95 },
  { name: "Bob", grade: "B", subject: "Science", score: 85 },
  { name: "Charlie", grade: "A", subject: "English", score: 92 },
  { name: "Diana", grade: "C", subject: "History", score: 75 },
  { name: "Eve", grade: "B", subject: "Art", score: 88 }
];
const groupBy = "grade";
```

**Expected Output:**
```js
{
  A: [
    { name: "Alice", grade: "A", subject: "Math", score: 95 },
    { name: "Charlie", grade: "A", subject: "English", score: 92 }
  ],
  B: [
    { name: "Bob", grade: "B", subject: "Science", score: 85 },
    { name: "Eve", grade: "B", subject: "Art", score: 88 }
  ],
  C: [
    { name: "Diana", grade: "C", subject: "History", score: 75 }
  ]
}
```
---

## Question 6 — Merge/Aggregate by Key
**Problem:** You're building an inventory management system for a retail store. You have multiple sales records for the same products and need to consolidate them by summing up quantities, calculating total sales, or aggregating other numerical values. This is essential for generating sales reports, inventory tracking, and business analytics. Create a function that merges objects with the same key property by aggregating their numerical values.

**Example 1 - Aggregate sales by product ID:**
**Input:**
```js
const sales = [
  { productId: "A", quantity: 10, price: 25 },
  { productId: "B", quantity: 5, price: 50 },
  { productId: "A", quantity: 7, price: 25 },
  { productId: "C", quantity: 3, price: 100 },
  { productId: "B", quantity: 2, price: 50 }
];
const groupBy = "productId";
const aggregateField = "quantity";
```

**Expected Output:**
```js
[
  { productId: "A", quantity: 17, price: 25 },
  { productId: "B", quantity: 7, price: 50 },
  { productId: "C", quantity: 3, price: 100 }
]
```

**Example 2 - Aggregate student scores by subject:**
**Input:**
```js
const testResults = [
  { studentId: "S001", subject: "Math", score: 85, attempts: 1 },
  { studentId: "S002", subject: "Science", score: 92, attempts: 1 },
  { studentId: "S001", subject: "Math", score: 90, attempts: 2 },
  { studentId: "S003", subject: "English", score: 78, attempts: 1 },
  { studentId: "S002", subject: "Science", score: 88, attempts: 2 }
];
const groupBy = "subject";
const aggregateField = "score";
```

**Expected Output:**
```js
[
  { studentId: "S001", subject: "Math", score: 175, attempts: 1 },
  { studentId: "S002", subject: "Science", score: 180, attempts: 1 },
  { studentId: "S003", subject: "English", score: 78, attempts: 1 }
]
```

**Example 3 - Aggregate employee hours by department:**
**Input:**
```js
const timeEntries = [
  { employeeId: "E001", department: "Engineering", hours: 8, date: "2024-01-01" },
  { employeeId: "E002", department: "Marketing", hours: 7, date: "2024-01-01" },
  { employeeId: "E001", department: "Engineering", hours: 6, date: "2024-01-02" },
  { employeeId: "E003", department: "HR", hours: 8, date: "2024-01-01" },
  { employeeId: "E002", department: "Marketing", hours: 8, date: "2024-01-02" }
];
const groupBy = "department";
const aggregateField = "hours";
```

**Expected Output:**
```js
[
  { employeeId: "E001", department: "Engineering", hours: 14, date: "2024-01-01" },
  { employeeId: "E002", department: "Marketing", hours: 15, date: "2024-01-01" },
  { employeeId: "E003", department: "HR", hours: 8, date: "2024-01-01" }
]
```
---

## Question 7 — Transform to Key-Value Map
**Problem:** You're building a user management system where you need to quickly look up users by their ID. Instead of searching through an array every time, you want to create a hash map (object) where the keys are the user IDs and the values are the complete user objects. This transformation significantly improves lookup performance from O(n) to O(1). Create a function that converts an array of objects into a key-value map using a specified property as the key.

**Example 1 - Transform users to ID-based map:**
**Input:**
```js
const users = [
  { id: "u1", name: "Alice", email: "alice@example.com" },
  { id: "u2", name: "Bob", email: "bob@example.com" },
  { id: "u3", name: "Charlie", email: "charlie@example.com" }
];
const keyField = "id";
```

**Expected Output:**
```js
{
  u1: { id: "u1", name: "Alice", email: "alice@example.com" },
  u2: { id: "u2", name: "Bob", email: "bob@example.com" },
  u3: { id: "u3", name: "Charlie", email: "charlie@example.com" }
}
```

**Example 2 - Transform products to SKU-based map:**
**Input:**
```js
const products = [
  { sku: "LAPTOP001", name: "Gaming Laptop", price: 1299, category: "Electronics" },
  { sku: "MOUSE002", name: "Wireless Mouse", price: 49, category: "Accessories" },
  { sku: "KEYB003", name: "Mechanical Keyboard", price: 129, category: "Accessories" }
];
const keyField = "sku";
```

**Expected Output:**
```js
{
  LAPTOP001: { sku: "LAPTOP001", name: "Gaming Laptop", price: 1299, category: "Electronics" },
  MOUSE002: { sku: "MOUSE002", name: "Wireless Mouse", price: 49, category: "Accessories" },
  KEYB003: { sku: "KEYB003", name: "Mechanical Keyboard", price: 129, category: "Accessories" }
}
```

**Example 3 - Transform orders to order number-based map:**
**Input:**
```js
const orders = [
  { orderNumber: "ORD-2024-001", customer: "Alice", total: 299.99, status: "shipped" },
  { orderNumber: "ORD-2024-002", customer: "Bob", total: 149.50, status: "pending" },
  { orderNumber: "ORD-2024-003", customer: "Charlie", total: 89.99, status: "delivered" }
];
const keyField = "orderNumber";
```

**Expected Output:**
```js
{
  "ORD-2024-001": { orderNumber: "ORD-2024-001", customer: "Alice", total: 299.99, status: "shipped" },
  "ORD-2024-002": { orderNumber: "ORD-2024-002", customer: "Bob", total: 149.50, status: "pending" },
  "ORD-2024-003": { orderNumber: "ORD-2024-003", customer: "Charlie", total: 89.99, status: "delivered" }
}
```
---

## Question 8 — Update Object Immutably
**Problem:** You're building a todo application using React or another framework that requires immutable state updates. When a user marks a todo as complete, you need to update the specific todo item without mutating the original array. This is crucial for maintaining predictable state management, enabling undo/redo functionality, and ensuring proper re-rendering in React applications. Create a function that updates an object in an array immutably by creating a new array with the modified object.

**Example 1 - Mark todo as completed:**
**Input:**
```js
const todos = [
  { id: 1, title: "Wash car", done: false, priority: "medium" },
  { id: 2, title: "Buy groceries", done: false, priority: "high" },
  { id: 3, title: "Call dentist", done: false, priority: "low" }
];
const targetId = 2;
const updates = { done: true };
```

**Expected Output:**
```js
[
  { id: 1, title: "Wash car", done: false, priority: "medium" },
  { id: 2, title: "Buy groceries", done: true, priority: "high" },
  { id: 3, title: "Call dentist", done: false, priority: "low" }
]
```

**Example 2 - Update user profile information:**
**Input:**
```js
const users = [
  { id: 1, name: "Alice", email: "alice@old.com", active: true },
  { id: 2, name: "Bob", email: "bob@example.com", active: true },
  { id: 3, name: "Charlie", email: "charlie@test.com", active: false }
];
const targetId = 1;
const updates = { email: "alice@new.com", name: "Alice Johnson" };
```

**Expected Output:**
```js
[
  { id: 1, name: "Alice Johnson", email: "alice@new.com", active: true },
  { id: 2, name: "Bob", email: "bob@example.com", active: true },
  { id: 3, name: "Charlie", email: "charlie@test.com", active: false }
]
```

**Example 3 - Update product inventory:**
**Input:**
```js
const products = [
  { id: 1, name: "Laptop", price: 999, stock: 10, category: "Electronics" },
  { id: 2, name: "Mouse", price: 25, stock: 50, category: "Accessories" },
  { id: 3, name: "Keyboard", price: 75, stock: 30, category: "Accessories" }
];
const targetId = 2;
const updates = { stock: 45, price: 22 };
```

**Expected Output:**
```js
[
  { id: 1, name: "Laptop", price: 999, stock: 10, category: "Electronics" },
  { id: 2, name: "Mouse", price: 22, stock: 45, category: "Accessories" },
  { id: 3, name: "Keyboard", price: 75, stock: 30, category: "Accessories" }
]
```
---

## Question 9 — Deep copy vs shallow copy
**Input:**
```js
const arr = [
  { name: "A", details: { score: 10 } },
  { name: "B", details: { score: 20 } }
];
```
**Expected Behavior:**
- Shallow copy: modifying nested object affects both copies.
- Deep copy: original unaffected.
---

## Question 10 — Sort by multiple properties
**Input:**
```js
const people = [
  { first: "John", last: "Doe", age: 28 },
  { first: "Jane", last: "Doe", age: 22 },
  { first: "John", last: "Smith", age: 35 }
];
```
**Expected Output:**
```js
[
  { first: "Jane", last: "Doe", age: 22 },
  { first: "John", last: "Doe", age: 28 },
  { first: "John", last: "Smith", age: 35 }
]
```
---

## Question 11 — Find if object exists by property
**Input:**
```js
const arr = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Tom" }
];
const searchId = 2;
```
**Expected Output:**
```js
true
```
---

## Question 12 — Remove object by id
**Input:**
```js
const arr = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Tom" }
];
const removeId = 1;
```
**Expected Output:**
```js
[ { id: 2, name: "Tom" } ]
```
---

## Question 13 — Paginate an array of objects
**Input:**
```js
const arr = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
];
const pageSize = 2;
const pageNumber = 2;
```
**Expected Output:**
```js
[ { id: 3 }, { id: 4 } ]
```
---

## Question 14 — Flatten nested arrays inside objects
**Input:**
```js
const arr = [
  { tags: ["js","react"] },
  { tags: ["node","express"] }
];
```
**Expected Output:**
```js
["js","react","node","express"]
```
---

## Question 15 — Unique values across objects
**Input:**
```js
const arr = [
  { skills: ["js","html"] },
  { skills: ["css","js"] }
];
```
**Expected Output:**
```js
["js","html","css"]
```
---

## Question 16 — Intersection of two arrays of objects by id
**Input:**
```js
const a = [ {id:1}, {id:2}, {id:3} ];
const b = [ {id:2}, {id:3}, {id:4} ];
```
**Expected Output:**
```js
[ {id:2}, {id:3} ]
```
---

## Question 17 — Difference of two arrays of objects by id
**Input:**
```js
const a = [ {id:1}, {id:2}, {id:3} ];
const b = [ {id:2}, {id:3}, {id:4} ];
```
**Expected Output:**
```js
[ {id:1} ]
```
---

## Question 18 — Case-insensitive search
**Input:**
```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "bob" }
];
const query = "BOB";
```
**Expected Output:**
```js
[ { id: 2, name: "bob" } ]
```
---

## Question 19 — Handle missing properties
**Input:**
```js
const arr = [
  { name: "X", stats: { score: 42 } },
  { name: "Y" },
  { name: "Z", stats: { score: 27 } }
];
```
**Expected Output (default score=0):**
```js
[
  { name: "Y" },
  { name: "Z", stats: { score: 27 } },
  { name: "X", stats: { score: 42 } }
]
```
---

## Question 20 — Count frequency of property values
**Input:**
```js
const arr = [
  { type: "fruit" },
  { type: "veg" },
  { type: "fruit" }
];
```
**Expected Output:**
```js
{ fruit: 2, veg: 1 }
```
---
