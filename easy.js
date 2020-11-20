/////////////////////////////////////////////////////////
//////////////////////// Part 1 /////////////////////////

// var userArray = new Array()

// var oddArray = new Array()
// var evenArray = new Array()

// userArray.push(2, 3, 5, 8, 15, 22, 45)

// function evenOdd (inputArray) {
    
//     for(i = 0; i < inputArray.length; i++){

//         if((inputArray[i]%2)>0){

//             oddArray.push(inputArray[i])
//         } else if ((inputArray[i]%2) == 0) {
            
//             evenArray.push(inputArray[i])
//         } else {

//             return "You entered a 0"
//         }
//     }

// }

// evenOdd(userArray)




/////////////////////////////////////////////////////////
//////////////////////// Part 2 /////////////////////////


function yesPrime(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {

    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}

function sortPrime(primeArray) {
    let prime = [];
    let notPrime= [];

    for (let number of primeArray) {
      if(yesPrime(number)){
        prime.push(number);
        
      }else {
        notPrime.push(number);
      }
    } 
    const returnObject = {
      notPrime,
      prime,
    };

    return returnObject;
  }
  
  console.log(sortPrime([55,639,420, 3, 7]));


