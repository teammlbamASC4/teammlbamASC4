
var myPokemonRoster = [
    ['Charizard', 'Fire', 150, 200, 100, true],
    ['Charizard2', 'Fire2', 1502, 2002, 1002, true]
];

function logPokemon() {
    // console.log('hello');
    var mySentence = '';
    for(i = 0; i < myPokemonRoster.length; i++){
        // console.log(myPokemonRoster[i][0]);
        // console.log('#');
        mySentence = mySentence + 
        console.log('#' + i + ' ' + myPokemonRoster[i][0] + 'TYPE: ' + myPokemonRoster[i][1]);
    }
};

logPokemon();