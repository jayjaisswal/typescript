// function
function printName(name: string): void {
  console.log(name);
}

printName("hello jay");

// spread or rest

function lotsOfName(cb: () => void, ...args: string[]): void {
  console.log(args);
    cb()
}

lotsOfName(
  () => {
    console.log("callback");
  },
  "djehb",
  "djhwb",
  "vjhb",
);
