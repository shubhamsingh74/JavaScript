// difference between dot and bracket notaion
const key = "email";
const dish = "Biryani";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person["person hobbies"]);
person[key] = "harshitvashisth@gmail.com";
person[dish] = "Chicken Biryani";
console.log(person);
