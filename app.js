"use strict";
const animals = ["apa", "orangutang", "gorilla", "get", "giraff"];
const obj = { name: "gugge", age: 20, ishappy: true };
function Hello(name) {
    if (name === "X") {
        return "hej X";
    }
    else {
        console.log("whazaaaah");
    }
}
Hello("X");
Hello("Sup");
console.log(animals);
console.log(obj);
