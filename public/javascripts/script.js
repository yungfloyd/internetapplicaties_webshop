$(document).ready(function(){
    $("#contactformulier").on('submit', function(e){
        e.preventDefault();
        var data = $('input[name=naam]').val();
        $.ajax({
            type: 'post',
            url: '/contact',
            data: data,
            dataType: 'text'
        })
        .done(function(data){
            $('#contactText').html("<h4>Bedankt voor de inzending. We proberen u zo snel mogelijk een antwoord te bezorgen.</h4>");
        });
    });
});

function addToCaddie(){
    alert("Aan winkelwagen toegevoegd")
}