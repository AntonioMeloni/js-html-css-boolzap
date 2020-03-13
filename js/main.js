$(document).ready(function(){

    function mostraOra() {
        var d = new Date();
        var hours = d.getHours();
        var minutes;

        if (d.getMinutes()<10) {
            minutes = '0' + d.getMinutes();
        }else {
            minutes = d.getMinutes();
        }

        var time = hours + ':' + minutes;
        return time;
    }

    $('.vocal').click(function (){
        sendMessage();
    });

    $('#message-text').keypress(function (event) {
        if(event.keyCode == 13){
            sendMessage();
        }
    })

    $('#message-text').click(function () {
        $('.microphone').hide();
        $('.invia').show();
    });

    $('.invia').click(function () {
        $('.invia').hide();
        $('.microphone').show();
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

    var source = $('#messaggio-template').html();
    var template = Handlebars.compile(source);


    function creaMsg(testoMsg, sentReceived , selettoreConversazione) {
        var datiMessaggio = {
            testoMessaggio: testoMsg,
            direzione: sentReceived
        };

        var templateMessaggio = template(datiMessaggio);
        $(selettoreConversazione).append(templateMessaggio);
    }

    var messaggiArchiviati = {

        c1: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Fabio come stai?',
                direzione: 'message-send'
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
        c2: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Francesca come stai?',
                direzione: 'message-send'
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
        c3: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Carlo come stai?',
                direzione: 'message-send'
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
        c4: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Mario come stai?',
                direzione: 'message-send'
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
        c5: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Paolo come stai?',
                direzione: 'message-send'
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
        c6: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Simone come stai?',
                direzione: 'message-send'
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
        c7: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Marco come stai?',
                direzione: 'message-send'
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
        c8: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Maria come stai?',
                direzione: 'message-send'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received'
            }
        ],
    };



    for (var convKey in messaggiArchiviati) {

        var numeroConversazione = convKey[1];

        for (var i = 0; i < convKey.length; i++) {
            var oggettoMessaggio = messaggiArchiviati[convKey][i];
            var testoMessaggio = oggettoMessaggio.testoMessaggio;
            var direzione = oggettoMessaggio.direzione;

            var selettoreConversazione = $('.chat-container[data-utente="' + numeroConversazione + '"]');
            creaMsg(testoMessaggio, direzione, selettoreConversazione);
        }
    }

    function sendMessage() {
         var testoMessaggio = $('#message-text').val();
         if(testoMessaggio.trim().length > 0) {
              $('#message-text').val('');
              creaMsg(testoMessaggio, 'message-send' , '.chat-container.chat-active');
              scroll();
              setTimeout(function() {
                   creaMsg('ok', 'message-received' , '.chat-container.chat-active');
                   scroll();
              }, 1000);
         }
    }
    // function sendMessage() {
    //     var testoMessaggio = $('#message-text').val();
    //     if(testoMessaggio.trim().length > 0) {
    //     $('#message-text').val('');
    //     var messaggio = $('.template-send .message').clone();
    //     messaggio.find('.send').text(testoMessaggio);
    //     messaggio.find('.orario').text(mostraOra());
    //     $('.chat-container.chat-active').append(messaggio);
    //     autoRespond();
    //     scroll();
    //     }
    // }

    // function autoRespond() {
    //     var autoreply = setInterval(function () {
    //         var testoMessaggio = 'Ok';
    //         var messaggio = $('.template-received .message').clone();
    //         messaggio.find('.received').text(testoMessaggio);
    //         messaggio.find('.orario').text(mostraOra());
    //         $('.chat-container.chat-active').append(messaggio);
    //         clearInterval(autoreply);
    //         scroll();
    //     },1500);
    // }

    function scroll() {
          var pixelScroll = $('.chat-container .chat-active').height();
          $('.chat-container.chat-active').scrollTop(pixelScroll);
     }

     $('.contact').click(function() {
         var nome = $(this).find('.name').text();
         $('.contact').removeClass('active');
         $(this).addClass('active');

         var utente = $(this).data('utente');
         $('.chat-container').each(function(){
              if(utente == $(this).data('utente')) {
                  $('.chat-container').removeClass('chat-active');
                  $(this).addClass('chat-active');
                  $('.chat-container').hide();
                  $(this).show();
              }
         });
    });

    $('.contact').click(function() {
        var nome = $(this).find('.name').text();
        $('.on-chat').find('.name').text(nome);
        var imgProfile = $(this).find('.avatar img').attr('src');
        $('.on-chat').find('.avatar img').attr('src', imgProfile);
    });


     $('.chat-container').on('click', '.click', function() {
        $('.click').not(this).siblings('.dropdown').removeClass('dropdown-active');
        $(this).siblings('.dropdown').toggleClass('dropdown-active');
     });

     $(document).on('click', '.destroy', function() {
        $(this).closest('.message').remove();
     });

});
