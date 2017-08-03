
// variables and data types
// functions
// -- both below are application logic / control flow
// conditionals (if, else) 
// loops (for while)
var myStringName = 'Kamari';

var myNumberAge = 17;

var myBooleanMale = true;

var myArrayFavColors = ['black','red','grey','purple', true, 231916];

var myObjectStudent1 = {
    'name': 'Kamari',
    'age': 16,
    'Is Male': true,
    favColors: ['blue', 'green']
};

var myObjectStudent2 = {
    'name': 'Lucas'
};

var myStudents = [
    {
        name: 'Lucas',
        age: 16
    },
    {
        name: 'Kamari',
        age: 16
    },
    {
        name: 'Nate',
        age: 17
    },
    {
        name: 'Ramses',
        age: 16
    }
];

// function thattakes an object or string and prints is to the console.
function sayHello(param1){
    console.log(param1.name);
}
// sayHello(myObjectStudent2);
// sayHello(myObjectStudent1);

function helloStudents(studentList){
    
    if (studentList.length >= 3) {
        for (i = 0; i < studentList.length; i++) {
            console.log('hello ' + studentList[i].name);
        }
    }
    
}
helloStudents(myStudents);
