

// declaring a variable called myPokemonRoster that contains 5 pokemon names as strings
var myPokemonRoster = ['charizard', 'mewtwo', 'eevee', 'cosmog', 'decidueye'];

// log myPokemonRoster to the terminal
// console.log(myPokemonRoster);

// declare a variable called firstToFight and set it equal to the 1st index of the MyPokemonRoster Array 
var firstToFight = myPokemonRoster[0];

// log the value of firstToFight
// console.log(firstToFight);

// declare a variable called secondToFight and set it euqal to the 2nd index of the array
var secondToFight = myPokemonRoster[2];

// log the value of secondToFight
// console.log(secondToFight);

// remove the last item from the array of myPokemon Roster
myPokemonRoster.pop();
// log myPokemonRoster to the console.
// console.log(myPokemonRoster);

myPokemonRoster.push('Pikachu');
myPokemonRoster.push('Tapu Fini');

// console.log(myPokemonRoster);
var rosterSize = myPokemonRoster.length;
// console.log(rosterSize);


// for (initial value; a conditional of the value; do this each time )
for (var i =0; i < myPokemonRoster.length; i++){
    console.log(myPokemonRoster[i]);
    // console.log(i);
}
