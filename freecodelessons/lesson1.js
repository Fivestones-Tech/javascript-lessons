// // var myName = 'matthew'

// // var name = 'christ'

// // console.log('the two names is expected to show ' + myName + ' and ' + name);

// var addingTwoNumbers = 10 + 10;
// console.log(addingTwoNumbers)

// var minusTwoNumbers = 100 - 20;
// console.log(minusTwoNumbers);

// var number = 10;
// number++
// console.log(number);

// var remainder = 25;
// numberLeft = remainder % 5
// console.log(numberLeft)

// var a = 11 ;
// var b = 22;
// var c = 6;

// a += 3;
// b += 7;
// c += 8;

// a *= 3;
// b *= 7;
// c *= 8;

// a /= 3;
// b /= 7;
// c /= 8;

// console.log(a)
// console.log(b)
// console.log(c)

// var inCompleteName = 'Matt'
// // var completeName = 'ew'

// // combineNames = inCompleteName + completeName;

// inCompleteName += 'ew'

// console.log(inCompleteName);


function getMilk(money) {
    var bottles = money * 1.5 ;
    console.log('buy ' + bottles + ' bottles of milk')


}
getMilk(5)
function getMilk(money) {
    var bottles = money * 1.5 ;
    console.log('buy ' + bottles + ' bottles of milk')


}
getMilk(5)

function getMilk(money) {
    var bottles = money / 1.5 
    Math.floor(money) / 1.5
    console.log(Math.floor(money) / 1.5)
    console.log("display the next line of code")
    console.log('buy ' + bottles + ' bottles of milk')
    console.log("display the next line of code")
    console.log('buy ' + Math.floor(bottles) + ' bottles of milk')
 return money % 1.5
}
getMilk(5)

function getMilk(money) {
    console.log('starting new code')
    // var bottles = Math.floor(money / 1.5)
    // console.log('buy ' + bottles + ' bottles of milk')
    console.log('next line of code')
    console.log('buy ' + calcBottles(money, 1.5) + ' bottles from another function')
    console.log('next line of code 2')
    console.log('remaining change is ' + calcChange(money, 1.5))
    console.log('next line of code 3')
   // return calcBottles(money, 1.5)
     console.log('next line of code 4')
    return calcChange(money, 1.5)
  }
  
  
  function calcBottles (startingMoney, costPerBottle) {
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  };
  
   function calcChange (startingMoney, costPerBottle) {
         var calcRemain = startingMoney % costPerBottle;
     return calcRemain;
   }
  
  console.log('checking new line of code')
  console.log(' hello master here is your change ' + getMilk(4))
  




