//Just uncommnet any task to check

//#region 
//task1

/*function isMultiple(number, divider){    
    if(validateInput(number) && validateInput(divider))
        return number % divider === 0 ? true : false
    else
        return NaN;
}

function validateInput(value){
    return isNaN(value) ? false : true;
}

function outputResult(result, messageOk, messageNok){
    !isNaN(result) ? 
    result ? console.log(messageOk) : console.log(messageNok) 
    : console.log("Error! One of input values is not a number!");
}*/


/*let undefinedChoice = true;
while(true){
    if(undefinedChoice){
        let number = prompt("Number: ");
        let divider = prompt("Divider: ");    
        outputResult(isMultiple(number, divider), 
        `${number} is divided by ` + `${divider}`, `${number} is not divided by ` + `${divider}`);
    }

    let closeDialogFlag = prompt("Close/Repaet(Y/N): ");
    if(closeDialogFlag === 'Y')
        break;
    else if(closeDialogFlag === 'N'){
        undefinedChoice = true;
        continue;
    }
    else{
        undefinedChoice = false;
        console.log("Unknown choice, try again");
    }
}*/

//#endregion

//#region 
//task2

//#region 
//task2.1

/*let num = prompt("Your choice(1-4): ");
let result;

function checkSeason(num){
    if(isNaN(num))
        return 'Value is not a number';
    else
        num = Number(num);
    switch(num){
        case 1:
            return 'Winter';
        case 2:
            return 'Spring';
        case 3:
            return 'Summer';
        case 4:
            return 'Autumn';
        default:
            return 'Unknown choice';
    }
}

result = checkSeason(num);
console.log(result);*/

//#endregion

//#region 
//task2.2

/*let month = prompt("Month number: ");

function checkMonth(month){
    if(isNaN(month))
        return "Value is not a number";
    else
        month = Number(month);
    switch(month){
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Autumn";
        default:
            return "Unknown Choice";
    }
}

console.log(checkMonth(month));*/

//#endregion

//#region 
//tast2.3

/*let dayOfWeek = prompt("Day of week: ");

function checkDayOfWeek(dayOfWeek){
    if(isNaN(dayOfWeek))
        return "Value is not a number";
    else
        dayOfWeek = Number(dayOfWeek);
    switch(dayOfWeek){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Unknown choice";
    }
}

console.log(checkDayOfWeek(dayOfWeek));*/

//#endregion

//#region 
//task2.4

/*let dayOfMonth = prompt("Day of month: ");

function checkDayOfMonth(dayOfMonth){
    if(isNaN(dayOfMonth))
        return "Value is not a number";
    else
        dayOfMonth = Number(dayOfMonth);
    switch(true){
        case dayOfMonth > 20:
            return "Third decade";
        case dayOfMonth > 10:
            return "Second decade";
        case dayOfMonth > 0:
            return "First decade";
        default:
            return "Unknown choice";
    }
}

console.log(checkDayOfMonth(dayOfMonth));*/

//#endregion

//#endregion

//#region 
//task3

//#region 
//task3.1

/*let num = prompt("Number: ");

function factorial(num){
    if(isNaN(num))
        return "Value is not a number";
    res = 1;
    for(let i = 1; i <= num; i++){
        res *= i;
    }
    return res;
}

console.log(factorial(num));*/

//#endregion

//#region 
//task3.2

/*let num = prompt("Number: ");

function dividedSequence(num){
    if(isNaN(num))
        return "Value is not a number";
    let res = 1;
    for(let i = 1; i <= num; i++){
        res += 1/i;
    }
    return res;
}

console.log(dividedSequence(num));*/

//#endregion

//#region 
//task3.3

/*let lim1 = prompt("Low limit: ");
let lim2 = prompt("High limit: ");

function getMultiplection(lim1, lim2){
    if(isNaN(lim1) || isNaN(lim2))
        return "One of values is not a number";
    if(lim1 > lim2)
        return "Low limit is greate then high limit";
    let res = lim1;
    for(let i = lim1; i <= lim2; i++){
        res *= i;
    }
    return res;
}

console.log(getMultiplection(lim1, lim2));*/

//#endregion

//#endregion

//#region 
//task4

//#region
//task4.1

/*let num = prompt("Number: ");

function isSimple(num){
    if(isNaN(num))
        return "Value is not a number";
    else
        num = Number(num);
    if(num < 2)
        return "Out of range of simple numbers";
    let counter = 0;
    for(let i = 1; i < num; i++){
        if(num%i === 0)
            counter++;
        if(counter > 1)
            return `${num}` + " is not simple";
    }
    return `${num}` + " is simple";
}

console.log(isSimple(num));*/

//#endregion

//#region 
//task4.2

//see task1

//#endregion

//#region 
//task4.3

/*let a = prompt("A side: ");
let b = prompt("B side: ");
let c = prompt("C side: ");

function isTriangle(a,b,c){
    if(isNaN(a) || isNaN(b) || isNaN(c))
        return "One or several values is not a nuber";
    else{
        a = Number(a); b = Number(b); c = Number(c);
    }

    if(a < 1 || b < 1 || c < 1)
        return "One or several values is 0 or less then 0";
    if (a + b > c && a + c > b && b + c > a)
        return "Triangle exists";
    else
        return "Triangle does not exist";
}

console.log(isTriangle(a,b,c));*/

//#endregion

//#region 
//task4.4

/*let a = prompt("A side: ");
let b = prompt("B side: ");
let c = prompt("C side: ");
let d = prompt("D side: ");

function isTriangle(a,b,c){
    if (a + b > c && a + c > b && b + c > a)
        return true;
    else
        return false;
}

function calculateTriangleArea(a,b,c){
    if(isNaN(a) || isNaN(b) || isNaN(c))
        return "One or several values is not a nuber";
    else{
        a = Number(a); b = Number(b); c = Number(c);
    }
    if(a < 1 || b < 1 || c < 1)
        return "One or several values is 0 or less then 0";
    let isTriangleFlag = isTriangle(a,b,c);
    if(isTriangleFlag){
        if(!isTriangleFlag)
            return "Triangle does not exists";
        else
        {
            let halfPer = (a + b + c)/2;
            return "Area equels: " + `${(halfPer*(halfPer-a)*(halfPer-b)*(halfPer-c))**0.5}`;
        }
    }
}

function calculateSquareArea(a,b){
    if(isNaN(a) || isNaN(b))
        return "One or several values is not a nuber";
    else{
        a = Number(a); b = Number(b);
    }
    if(a < 1 || b < 1)
        return "One or several values is 0 or less then 0";
    return "Area equels: " + `${a*b}`;
}

console.log(calculateTriangleArea(a,b,c));
console.log(calculateSquareArea(a,b));*/

//#endregion

//#endregion

//#region 
//task5

//#region 
//task5.1

/*function Student(name, surname, isMale, contactData){
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contactData = contactData;
}

function StudentExt(name, surname, isMale, contactData, fac, caf){
    Student.call(this, name, surname, isMale, contactData);
    this.fac = fac;
    this.caf = caf;
}


let st1 = new Student("John", "Doe", true, "Some data");
let st2 = new StudentExt("John", "Doe", true, "Some data", "Some fac", "SomeCaf");

console.log(st1);
console.log(st2);*/

//#endregion

//#region 
//task5.2

/*let arr = [];

function initializeArr(arr){
    for(let i = 0; i < Math.round(Math.random() * 100); i++){
        arr.push(Math.round(Math.random() * 20));
    }
}

function printEven(arr){
    let res = "";
    for(let i = 0; i < arr.length; i++){
        if(i%2 === 0)
            res += arr[i] + ', ';
    }
    console.log('Even elements: ' + res);
}

function whereIsNullElements(arr){
    let res = "";
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            res += i + ', ';
            counter++;
        }
    }
    console.log('Indexes where element is zero: ' + res);
    return counter;
}

initializeArr(arr);

console.log(arr);
console.log('Lenght: ' + arr.length);

printEven(arr);

arr.push(0);
arr.push(0);
console.log(arr);
let howNumchNull = whereIsNullElements(arr);
console.log("Count of zero elements: " + `${howNumchNull}`);*/

//#endregion

//#region 
//task5.3

/*function Book(author, name, year, publisher){
    this.author = author;
    this.name = name;
    this.year = year;
    this.publisher = publisher;
}

function BookExt(author, name, year, publisher, format, id){
    Book.call(this, author, name, year, publisher)
    this.format = format;
    this.id = id;
}

let book1 = new Book("Some Author", "Some name", 1993, "Some Pulisher");
let book2 = new BookExt("Some Author", "Some name", 1993, "Some Pulisher", "Pdf", 1375);

console.log(book1);
console.log(book2);*/

//#endregion

//#endregion

//#region 
//task6

function MyArray(){
    this.length = 0;
    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
        this.length++;
     }
    this.push = function(){
        for(let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }
    this.pop = function(){
        let value = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return value;
    }
    this.forEach = function(callback){
        for(let i = 0; i < this.length; i++){
            callback(this[i], i, this);
        }
    }
}

let arr = new MyArray(1,2,3,4,5);

console.log(arr);
console.log(arr.push(6));
console.log(arr);
console.log(arr.pop());
console.log(arr);

arr.forEach(s => console.log(s));

//#endregion