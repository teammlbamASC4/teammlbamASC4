
function rand(num){
    // returns a random number between 0 and num
    return Math.floor(Math.random()*num);
}




function randLetter(){
    var letters = 'abcdefghiklmnopqrstuvwxyz';
    // return random letter
    return letters[rand(letters.length)];
}
console.log(randLetter());
