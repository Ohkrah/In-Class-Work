// WRITE YOUR CODE BELOW

const names = ["Yin", "Luigi", "Ian", "Dion"];

console.log (names.length);

for (let i=0; i<names.length; i++){
    console.log(`Great to see you, ${names[i]}`);
}
for (const name of names){
    console.log("Great to see you", name);
}
let counter = 0;
//have this print while the number of variables in names is less than 5
while (names.length > counter){
    console.log("test");
    counter++;
}