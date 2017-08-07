

var firstName = '';
var lastName = '';
var userSex = '';
var countryCode = '';

$(document).ready(function () {

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            // console.log(data.results[0].name.first);
            getData(data);
        }
    });     


    function getData(arg1) {
        countryCode = arg1.results[0].nat;
        $('body').append(countryCode + ' ');
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/alpha?codes='+countryCode,
            dataType: 'json',
            success: function (data) {
                var countryCapital = data[0].capital;

                $('body').append('has the capital of ' + countryCapital);
            }
        });     

    }

    
});
