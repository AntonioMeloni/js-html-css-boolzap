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

    function sendMessage() {
        var testoMessaggio = $('#message-text').val();
        if(testoMessaggio.trim().length > 0) {
        $('#message-text').val('');
        var messaggio = $('.template-send .message').clone();
        messaggio.find('.send').text(testoMessaggio);
        messaggio.find('.orario').text(mostraOra());
        $('.chat-container.chat-active').append(messaggio);
        autoRespond();
        scroll();
        }
    }

    function autoRespond() {
        var autoreply = setInterval(function () {
            var testoMessaggio = 'Ok';
            var messaggio = $('.template-received .message').clone();
            messaggio.find('.received').text(testoMessaggio);
            messaggio.find('.orario').text(mostraOra());
            $('.chat-container.chat-active').append(messaggio);
            clearInterval(autoreply);
            scroll();
        },1500);
    }

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
