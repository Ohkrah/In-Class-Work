// Change the values and operators below to test your algorithm meets all conditions
const x = 50;
const expression1 = (x < 25);
const expression2 = (x > 50);

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log("true true");
}
else if (expression1) {
    console.log("true false");
}
else if (expression2) {
    console.log("false true");
}
else {
    console.log("false false");
}
