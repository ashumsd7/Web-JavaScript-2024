let name= {
    firstName: 'John',
    lastName: 'Smith',
    printFullName:function(){
        console.log(this.firstName + " " + this.lastName)

    }
}


let name2={
    firstName: 'Mahendra',
    lastName: 'Dhoni',
}


//fun borrowing
const fullName2= name.printFullName.call(name2)

console.log('fullName2',fullName2)


let fullName=name.printFullName()
console.log('fullName',fullName)