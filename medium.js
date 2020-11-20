/////////////////////////////////////////////////////////
//////////////////////// Part 1 /////////////////////////

// var input = prompt("Enter in any letter, and I will check to see if it is a vowel")


// function vowelChecker (letter) {

//     var vowels = ['a', 'e', 'i', 'o', 'u']

//     // var x = vowels.length 

//     for(i = 0; i < vowels.length; i++) {


//         if (letter === vowels[i]) {

//             return letter + " is a vowel!"
//         } else if (letter == 'y') {

//             return letter + " is sometimes a vowel"
//         } else {

//             return letter + " is not a vowel..."
//         }
        
//     }
// }

// console.log(vowelChecker(input))


/////////////////////////////////////////////////////////
//////////////////////// Part 3 /////////////////////////

function practice(num1, num2) {

    if(num1 < num2) {
        num3 = num1
    } else {
        num3 = num2
    }

    var answer

    for(i = num3; i < 0; i--) {

        if ((num1%num1) == 0 && (num2%num1) == 0){

           answer = num1
        } else if ((num2%num2) == 0 && (num1%num2) == 0) {
    
           answer = num2
        } else {
    
            answer = num3
        }
    }

    return answer
   
}

practice (5, 10)

/////////////////////////////////////////////////////////
//////////////////////// Part 4 /////////////////////////
let oldMileage

let car = {

    make: "Honda",
    model: "CRV",
    year: "2020",
    mileage: 0,
    color: "red",


    driveToWork (){
        oldMileage = this.mileage

        this.mileage += 33

        return `Old miles: ${oldMileage} | New miles: ${this.mileage}`
    },
        

    driveAroundWorld (){
        oldMileage = this.mileage

        this.mileage += 24000

        return `Old miles: ${oldMileage} | New miles: ${this.mileage}`
    },

    runErrands (){
        oldMileage = this.mileage

        this.mileage += 30

        return `Old miles: ${oldMileage} | New miles: ${this.mileage}`
    }
    

    
}

console.log(car.driveToWork())
console.log(car.driveAroundWorld())
console.log(car.runErrands())
// console.log(car.driveAroundWorld())
// console.log(car.runErrands())


