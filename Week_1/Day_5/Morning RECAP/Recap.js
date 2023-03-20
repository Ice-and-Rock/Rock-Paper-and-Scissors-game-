

''
let myVariable = 100 ; // Can reassign 

const accountStatement = "My account has... £ ${myVariable}" ;

for (let i = 0 ; i < 10 ; i++) {
    console.log("i") ;
}

while ( i < 10) {
    console.log(i) ;
    i++ ;
}
''


// Create an account balance statement for a customer
// Take in a customer name
// Take in a customer balance
// Create some text that tells the customer their balance
// Return that text

function createBalanceStatement(input, //And Password?) {
    let statement= "${input.name}, you have a balance of £ ${input.balance}" ;
    return statement ; 
} ;

let custoners = [

const customer1 = {
    name: "Rosie",
    balance = 100
} ;
const customer2 = {
    name: "Nick",
    balance: 200
} ;
const customer3 = {
    name: "Becks",
    balance: 300
} ;
]

for (let i = 0; i < customers.length; i++ ){
    balanceStatment(customers[i])
}
//"let" code above does the same as three lines below
    console.log(createBalanceStatement(customers[0]))
    console.log(createBalanceStatement(customers[1]))
    console.log(createBalanceStatement(customers[2]))