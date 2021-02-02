// Q1
let triangle = [5, 6, 7];
let firstMin = Math.min(...triangle);

for(i=0; i<=triangle.length; i++){
    if(triangle[i] == firstMin){
        triangle.splice(i,1);
    }
}

let secMin = Math.min(...triangle);
let result1 = firstMin * secMin / 2;
console.log("A1: " + result1);


// Find two minimum value

// for(i=0; i<=triangle.length; i++){
//     if(triangle[i] == firstMin){
//         triangle.splice(i,1);
//     }
// }

// triangle.forEach(findMin, secMin);

// function findMin(value, idex, arr, min){
//     min = Math.min(arr)
// }

// console.log(secMin);
// console.log(firstMin);

// console.log(firstMin * secMin / 2);


// Q2
let value = 9;
let result2 = 0;

for(i=1; i<=value; i++){
    result2 += i;
}

console.log("A2: " + result2);

// Q3
let givenString = "How are you?";
let result3 = givenString.toUpperCase();

console.log("A3: " + result3);

// Q4
let int = 8;
let randomNum = Math.floor(Math.random()*10) + 1;

if(int == randomNum){
    console.log("A4: Good work!  " + randomNum);
} else{
    console.log("A4: Not matched!  " + randomNum);
}


// Q5???
let array5 = [23, 6, 19, 38, 50];
let givenArray5 = [35, 46, 24, 7, 68, 94];

for(i=0; i<givenArray5.length; i++){
    array5[i] = givenArray5[i];
}

console.log("Q5: " + array5);


// Q6
let givenArray1 = [3, 7, 1, 8, 4, 2, 9, 6];
let resultArray1 = [];
let count = givenArray1.length;
let temp;

for(i=1; i<=count; i++){
    temp = Math.min(...givenArray1);
    resultArray1.push(temp);
    for(j=0; j<givenArray1.length; j++){
        if(givenArray1[j] == temp){
            givenArray1.splice(j, 1);
        }
    }
}

console.log("A6: " + resultArray1);


// Q7
let givenArray7 = [3, 7, 1, 8, 4, 2, 9, 6];
let resultArray7 = [];

for(i=givenArray7.length - 1; i>=0; i--){
    resultArray7.push(givenArray7[i]);
}

console.log("A7: " + resultArray7);

// Q8
let customer_A = {
    name: "Amber",
    email: "amber@hotmail.com",
    order: 178
}
let customer_B = {
    name: "Bobby",
    email: "bobby@hotmail.com",
    order: 298
}
let customer_C = {
    name: "Carlos",
    email: "carlos@hotmail.com",
    order: 88
}

console.log("A8: ");
console.log(customer_A);
console.log(customer_B);
console.log(customer_C);


// Q9
let customerArray = [customer_A, customer_B, customer_C];
let maxOrder = 0;
let customerName = "";

for(i=0; i<customerArray.length; i++){
    if(customerArray[i].order > maxOrder){
        maxOrder = customerArray[i].order
        customerName = customerArray[i].name;
    }
}

console.log("A9: " + customerName);
