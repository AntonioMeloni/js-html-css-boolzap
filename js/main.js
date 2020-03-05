$(document).ready(function(){
    $('.vocal').click(function(){
        var testoMessaggio = $('#message-text').val();
        $('#message-text').val('');
        // $('#nome-utente').html('<span class="rosso">' + nomeInput + '</span>');
        // $('#nome-utente').text('<span class="rosso">' + nomeInput + '</span>');
        // $('#nome-utente').text(nomeInput).attr('class', 'rosso').css('background-color', 'yellow');
        // $('.lista-nomi').append('<div>' + nomeInput + '</div>');
        var messaggio = $('.template-send .message').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
        messaggio.children('.send').text(testoMessaggio); // Modifico il testo messaggio nel messaggio
        messaggio.find('.orario').text('05:05');
        $('.chat').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
    });
    $('.invia').click(function(){
        var autoreply = setInterval(function () {
            var testoMessaggio = 'Ok';

            var messaggio = $('.template-received .message').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
            messaggio.children('.received').text(testoMessaggio); // Modifico il testo messaggio nel messaggio
            messaggio.find('.orario').text('05:05');
            $('.chat').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
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
    // console.log(carattereFiltro);
    $('.contact').each(function(){ // Se nella lista contatti è presente il carattere digitato visualizzarlo
        // console.log($(this).text());
        if ($(this).find('.name').text().toLowerCase().includes(carattereFiltro)) { // Se il nome del list item ha al suo interno i caratteri digitati visualizzalo
            $(this).show();
        } else { // Altrimenti non visualizzarlo
            $(this).hide();
        }
    });
});
