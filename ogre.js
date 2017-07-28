
var myGold = 100;



function setup(){
    $('body').append('<p>You have $' +myGold+ '</p>');
      $('button').click(function(){
        console.log('hello');
        myGold++;
        $('p').html('You have $'+myGold);
        
    });





}
$(document).ready(setup);
