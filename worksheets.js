

// var x = 0;
// // if something is true then do this thing
// if (true){
//     // do this thing
// }

// // for (condition) do this thing
// // (initial value; condition; happens every time it loops)
// for (var i = 3; i < 15; i = i + 3){
//     // do this thing
// }

// console.log('Hello My Name is Victor Ramirez');
// console.log('Hello My Name is Eduardo Valenzuela');

// function sayHello(x,y){
//     //do something
//     // console.log('hello my name is' + x + ' ' + y);
//     return x + y;
// }
// sayHello('Ramses', 'Hereford');

// sayHello('Brian', 'Antoine');

// var teachingFellow = sayHello('Brian','Antoine');

// console.log(teachingFellow);

// teachingFellow = sayHello('Mohammed', 'Ajao');
// console.log(teachingFellow);

// function getArea(width,length){
//     return (width * length) / 2;
// }

// var x = 15; // 15
// var y = x; // 15

// var mlbroom = getArea(30,20);

// console.log(mlbroom);

// var bondroom = getArea(60,60);

// console.log(bondroom);

// var roomDifference = mlbroom - bondroom;

// console.log(roomDifference);

function myFunction1(){

}
var myFunction2 = function(){

};

function pokemon(name, hp, speak){
    this.name = name;
    this.hp = hp;
    this.speak = function(){
        console.log('ATTACK!');
    };
}

var charizard = new pokemon('Charizard', 100);
var pikachu = new pokemon('Pikachu', 150);
pikachu.hp = Math.random();



console.log(pikachu);

charizard.speak();
pikachu.speak();