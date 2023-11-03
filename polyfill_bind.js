let name={
    firstName:'John',
    lastName:'Smith',
    
}


let printName= function(){
    console.log('You nam is ' + this.firstName + ' ' + this.lastName)
}

const namePrinter= printName.bind(name)

console.log('namePrinter',namePrinter)