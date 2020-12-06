$(document).ready(function(){
    $("form#contactformulier").on('submit', function(e){
        e.preventDefault();
        var data = $('input[name=naam]').val();
        $.ajax({
            type: 'post',
            url: '/contact',
            data: data,
            dataType: 'text'
        })
        .done(function(data){
            $('h4').html(data.naam);
        });
    });
});

function addToCaddie(){
    alert("Aan winkelwagen toegevoegd")
}