"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function
function printName(name) {
    console.log(name);
}
printName("hello jay");
// spread or rest
function lotsOfName(cb, ...args) {
    console.log(args);
    cb();
}
lotsOfName(() => {
    console.log("callback");
}, "djehb", "djhwb", "vjhb");
//# sourceMappingURL=app.js.map