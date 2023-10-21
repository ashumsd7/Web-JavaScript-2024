let name= {
    firstName: 'John',
    lastName: 'Smith',
    printFullName:function(homeTown){
        console.log(this.firstName + " " + this.lastName + ' '+ homeTown)
    }
}


let name2={
    firstName: 'Mahendra',
    lastName: 'Dhoni',
}


//fun borrowing
const fullName2= name.printFullName.call(name2, 'Delhi')

console.log('fullName2',fullName2)


let fullName=name.printFullName()
console.log('fullName',fullName)


let namePrinter = name.printFullName.bind('Jaipur')

console.log('namePrinter',namePrinter)

namePrinter()