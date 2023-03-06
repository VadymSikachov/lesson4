///////////task 1
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
let worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log('task 1');
console.log(worker.firstName); // виведе 'Ivan'

console.log(worker.secondName); //виведе 'Ivanov'

console.log(worker.rate); //виведе 10

console.log(worker.days); //виведе 31

console.log(worker.getSalary()); //виведе 310 - тобто 10*31

/////////// task 2

class MyString {
    reverse(string){
        return string.split('').reverse().join('');
    }
    ucFirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    ucWords(string){
        return string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
        
    }
}
let str = new MyString();
console.log('task 2');

console.log(str.reverse('IVAN')); //виведе 'NAVI'

console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'

console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

/////////////// task 3
console.log('task 3');
 class CoffeeMake{
    constructor(type = 'cofee'){
        this.type = type
    }
    on(){
        console.log(`start ${this.type}`);
    }
    off(){
        console.log(`stop ${this.type}`);
    }
 }
 class CoffeeMashineFirst extends CoffeeMake{
    constructor(type, procedure = 'капельна'){
        super(type)
        this.procedure = procedure;
    }
    ownProp(){
        console.log(`first mashine is ${this.type} and ${this.procedure} `);
    }
 }
 let first = new CoffeeMashineFirst();
first.on();
first.ownProp();
first.off();
class CoffeeMashineSecond extends CoffeeMake{
    constructor(type, procedure = 'капельна'){
        super(type)
        this.procedure = procedure;
    }
    ownProp(){
        console.log(`This mashine is ${this.type} and ${this.procedure} `);
    }
 }
 let second = new CoffeeMashineSecond('tea','ріжкова');
 second.on();
 second.ownProp();
 second.off();
 class CoffeeMashineThird extends CoffeeMake{
    constructor(type, procedure = 'капельна'){
        super(type)
        this.procedure = procedure;
    }
    ownProp(){
        console.log(`This mashine is ${this.type} and ${this.procedure} `);
    }
 }
 let third = new CoffeeMashineThird('MacCofee','каво-машина');
 third.on();
 third.ownProp();
 third.off();