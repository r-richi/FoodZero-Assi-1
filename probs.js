// prob1
function sumNum(n) 


{let sum = 0;
for ( ilet = 1; i <= n; i++) {sum = sum + i;}
return sum;
}
console.log(sumNum(5));


// prob2
function countEvenOdd(numbers) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even++;
        } 
        else {
            odd++;
        }
    }

    console.log("Even:", even);
    console.log("Odd:", odd);
}

countEvenOdd([10, 15, 20, 25, 30, 35]);

// prob3

function factorial(n)
 {let result = 1;
 for (let i = 1; i <= n; i++) 
    { result = result * i;}
return result;
}
console.log(factorial(5));

// prob7
function findLargest(numbers) {

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) 
     {largest = numbers[i];

     }

    }

    return largest;
}

console.log(findLargest([10, 45, 20, 80, 30]));
 
// prob8
function square(n) 
{
 return n * n;
}

console.log(square(5));

console.log(square(8));



// prob10node

function checkVoting(age) {

    if(age >= 18) {
      return "Eligible for Voting";
    }

    else{
      return "Not Eligible for Voting";
    }
}
console.log(checkVoting(20));

console.log(checkVoting(15));