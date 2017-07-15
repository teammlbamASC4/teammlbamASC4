
var prompt = require('prompt-sync')();
// create an empty array with 6 objects
var myPokemonObjects = [
    {
        name: 'Charizard1',
        type: ['dragon', 'flying'],
        hp: 105,
        atk: 150,
        def: 200,
        legendary: true
    },
    {
        name: 'Charizard2',
        type: ['dragon', 'flying'],
        hp: 105,
        atk: 150,
        def: 200,
        legendary: true
    },
    {
        name: 'Charizard3',
        type: ['dragon', 'flying'],
        hp: 105,
        atk: 150,
        def: 200,
        legendary: true
    },
    {
        name: 'Charizard4',
        type: ['dragon', 'flying'],
        hp: 105,
        atk: 150,
        def: 200,
        legendary: true
    },
    {
        name: 'Charizard5',
        type: ['dragon', 'flying'],
        hp: 105,
        atk: 150,
        def: 200,
        legendary: true
    },
    {
        name: 'Charizard6',
        type: ['dragon', 'flying'],
        hp: 105,
        atk: 150,
        def: 200,
        legendary: true
    },
];


// declare a function called print rosterthat takes an array of objects
function printer(name){
    name.toUpperCase();
    
}
printer('Victor');

function printRoster(ele){
    for (var i = 0; i < ele.length; i++){
        console.log(ele[i].hp);
        
    }
}
// call the function printRoster and pass it an array of objects
printRoster(myPokemonObjects);

function pokemonAttack(someArray){
    for (var i = 0; i < someArray.length; i++){
        someArray[i].hp = someArray[i].hp - 10;
        console.log(someArray[i].hp);
    }
}
pokemonAttack(myPokemonObjects);



function userAttack(){
    var attackAmount = prompt('how hard do you hit, enter a #');
    var whichPokemon = Math.floor(Math.random()*10);
    console.log(myPokemonObjects[whichPokemon].hp - attackAmount);
}
userAttack();