let password1 = prompt("Enter your password")
let password2 = prompt("Enter your password again")
let similar = ""


function compare(pass1, pass2){
let similar = pass1.localeCompare(pass2)
if (similar){
console.log("Similar")
}else{
console.log("Not similar")
}
return similar
}

//Log the function for the developer to see
console.log(`${password1} and ${password2} is ${similar}`)

