
$( document).ready(function() {
    
    $.ajax({
        url: 'https://swapi.co/api/people/?format=json',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });


});

