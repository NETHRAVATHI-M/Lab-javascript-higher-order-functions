var foods = ["pizza","burger","fingerChips","donuts","springRoll"];
console.log(foods.slice(1,4));
const food1 = ["pizza","burger","fingerChips","donuts","springRoll"];
 food1.splice(2,0,"noodles","icecream","fingerShips");
console.log(food1);

const numberArray = [12,324,213,4,2,3,45,4232];
 const number = numberArray.filter(function(num){
     return (num%2 == 0);
 });
 console.log(number);


myArray = [12,324,213,4,2,3,45,4232];

function prime(arr){
    return "The prime numbers are: " + arr.filter((number) => {
 
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i=== 0) return  false;
        }
        return true;
    });
}

var myArray1 = [2,3];

function nonPrime(arr){
   
    return "The even numbers are: " + arr.filter((number) => {
 
        for (var i = 2; i <= myArray1.length; i++) {
            if (number % i=== 0) true;
        }
        return false;
    });
}
console.log(prime(myArray));
console.log(nonPrime(myArray1));

const array = [12,324,213,4,2,3,45,4232];
function isEven(array){
    return "the lamba function even numners are "+array.filter(num =>num%2 ==0);
}

console.log(isEven(array));


const mapArray = [11,34,20,5,53,16];
let modified = mapArray.map(function(items){
    return items*items;
});
console.log(modified);

let reduce =[2,3,5,10];
let sum=0;
let modified1 = mapArray.reduce(function(items){
    sum=sum+items;
    return sum;
});
console.log("the sum agter applying reduce function "+modified1);

