$(document).ready(function(){

    function mostraOra() {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var time = hours + ':' + minutes;
        return time;
    }

    $('.vocal').click(function(){
        var testoMessaggio = $('#message-text').val();
        $('#message-text').val('');
        var messaggio = $('.template-send .message').clone();
        messaggio.find('.send').text(testoMessaggio);
        messaggio.find('.orario').text(mostraOra());
        $('.chat').append(messaggio);
    });

    $('.invia').click(function(){
        var autoreply = setInterval(function () {
            var testoMessaggio = 'Ok';
            var messaggio = $('.template-received .message').clone();
            messaggio.find('.received').text(testoMessaggio);
            messaggio.find('.orario').text(mostraOra());
            $('.chat').append(messaggio);
            clearInterval(autoreply);
        },1500);
    });

    $('#message-text').click(function () {
        $('.microphone').hide();
        $('.invia').show();
    });

    $('.invia').click(function () {
        $('.invia').hide();
        $('.microphone').show();
    });
});

$('#cerca-contatti').keyup(function(event){
    var carattereFiltro = $(this).val().toLowerCase();
    ;
    $('.contacts .contact').each(function(){
        if ($(this).find('.name').text().toLowerCase().includes(carattereFiltro)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});
