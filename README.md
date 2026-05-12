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
