# Typescript

- It Gives Type Safety.

# Chapter 1 : Basics

**SetUP**

- `install typescript`
  - npm i typscript -g
- `check version`
  - tsc -v

**How to run ts file (Transpiled)**

- `tsc app.ts`
  - it will create app.js file
  - Alternate use `tsc --watch ` it will autoTranspile on save

`If u do this still your file transpiled to js with message Type 'string' is not assignable to type 'number'.`

**What is Transpiled?**

`Transpilation describes the process of converting one high-level programming language into another high-level language  at a similar level of abstraction.`

```bash
var a = 9;
a = "Hello"
```

# Chapter 2: Configuration

1. create tsconfig.json run `tsc --init`
   then create app.ts
2. run tsc -w

# Chapter 3: Types

## 📌 Primitive Types
  **Number**
   ```ts
  let c: Number = 12;
  ```
- **String**  
  ```ts
  let d: String = "Hello";
  ```
- **Boolean**  
  ```ts
  let e: Boolean = true;
  ```
- **Null**  
- **Undefined**  
- **Symbol**  
- **BigInt**  

➡️ Primitives are stored in **stack memory**.

### Example
```ts
var a = 12;
var b = a;
b = b + 2; 
// b = 14, a = 12 (different memory locations)
```

---

## 📌 Reference Types
- **Object**
- **Array**
- **Tuple**
- **Enum**
- **Function**
- **Class**
- **Interface**
- **Type Alias**  

➡️ Reference types are stored in **heap memory**.

### Array Examples
```ts
let arr: Number[] = [1,2,3];
let arr1: (Number | String)[] = [1,2,3,"Hello"];
let arr2: (Number | Object)[] = [1,2,3,{name:"John"}];
```

### Reference Example
```ts
var p = [1,2,3,4,5];
var q = p;
q.pop();
// Both p and q = [1,2,3,4] (same memory location)
```

---

## 📌 Tuples
- Fixed length array with different types of data  
- Order matters  

```ts
let tupluu: [Number, String] = [1, "Hello"];
```

---

## 📌 Enums
- Define a set of named constants  

```ts
enum UserRoles {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

UserRoles.ADMIN; // "admin"
UserRoles.USER;  // "user"
UserRoles.GUEST; // "guest"
```

---

## 📌 Special Types
- **Any**  
  ```ts
  let j; // can hold any type
  ```
- **Unknown**  
  ```ts
  let k: unknown;
  k = 12;
  k = "Hello";
  k = true;

  if(typeof k === "number"){ console.log(k); }
  if(typeof k === "string"){ console.log(k.toUpperCase()); }
  if(typeof k === "boolean"){ console.log(k); }
  ```
- **Void**  
  ```ts
  function greet(): void {
      console.log("Hello World");
  }
  ```

---

## ✅ Key Takeaways
- **Primitives** → stored in stack, independent copies.  
- **Reference types** → stored in heap, shared references.  
- **Tuples** → fixed length, ordered types.  
- **Enums** → named constants.  
- **Any vs Unknown** → `any` skips type checking, `unknown` requires type checks.  
- **Void** → functions with no return value.  


