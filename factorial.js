// Pseudocode
// Write a factorial funciton
// Initialize variable product to 1
// start a loop that will continue up to and including the Number input
// multiply product by the loop iteration
//return product once the loop is finished


function factorial(num){
    let product = 1
    if(num >= 0){
        for(let i = 1; i <= num; i++){
            product *= i
        } 
    } else {
        console.log("You can't calculte a factorial of a negative value!")
        return
    }
    return product
}

const result = factorial(5)

console.log('result is', result)