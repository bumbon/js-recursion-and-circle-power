
//   var x = prompt("Input a number:",'');
//   var n = prompt("Input a power",'');

// function pow1(x,n) {
//   if (n != 1) {
//     return x * pow1(x, n - 1);
//   } else {
//     return x; // первая степень числа равна самому числу
//   }
// }


// function pow2() {

//   var result = x;
//   for (var i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
  
// }
// console.log(pow1(x,n));
// console.log(pow2());

var n=Number(prompt("Input number",''));
console.log("Inputed number:",n);
function sumTo() {
    var rezult=0;
    while(n>=1) {
       rezult+=n;
       n-=1;
   
    }
    console.log("Rezult:",rezult);
}

sumTo();