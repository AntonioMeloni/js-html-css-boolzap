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


    var source = $('#contatto-template').html();
    var template = Handlebars.compile(source);

    function creaContatto(nome, avatar , ultimoMessaggio , selettoreContatto) {
        var datiContatto = {
            name: nome,
            imgProfile: avatar,
            lastMessage:ultimoMessaggio
        };

        var templateContatto = template(datiContatto);
        $(selettoreContatto).append(templateContatto);
    }

    var rubrica = {
        r1: {
            name: 'Fabio',
            imgProfile: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&clotheColor=Red&eyeType=EyeRoll&eyebrowType=Angry&mouthType=Grimace&skinColor=Tanned',
            lastMessage: 'Non poteva andare altrimenti'
        },

        r2: {
            name: 'Francesca',
            imgProfile: 'https://www.w3schools.com/howto/img_avatar2.png',
            lastMessage: 'Non poteva andare altrimenti'
        },

        r3: {
            name: 'Carlo',
            imgProfile: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=Light',
            lastMessage: 'Non poteva andare altrimenti'
        },

        r4: {
            name: 'Mario',
            imgProfile: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Sunglasses&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=PastelBlue&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Vomit&skinColor=Black',
            lastMessage: 'Non poteva andare altrimenti'
        },

        r5: {
            name: 'Paolo',
            imgProfile: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Round&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=BlazerSweater&clotheColor=PastelYellow&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Pale',
            lastMessage: 'Non poteva andare altrimenti'
        },

        r6: {
            name: 'Simone',
            imgProfile: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&hairColor=Brown&facialHairType=BeardLight&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=PastelOrange&eyeType=Hearts&eyebrowType=UpDownNatural&mouthType=Sad&skinColor=Light',
            lastMessage: 'Non poteva andare altrimenti'
        },

        r7: {
            name: 'Marco',
            imgProfile: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&clotheColor=PastelBlue&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Tanned',
            lastMessage: 'Non poteva andare altrimenti'
        },

        r8: {
            name: 'Maria',
            imgProfile: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=Blank&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelOrange&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Vomit&skinColor=Yellow',
            lastMessage: 'Non poteva andare altrimenti'
        },

    };

    for (var key in rubrica) {

        var numeroContatto = key[1];

            var oggettoContatto = rubrica[key];
            var name = oggettoContatto.name;
            var imgProfile = oggettoContatto.imgProfile;
            var ultimoMessaggio = oggettoContatto.lastMessage;

            var selettoreContatto = $('.contact[data-utente="' + numeroContatto + '"]');
            creaContatto(name, imgProfile, ultimoMessaggio , selettoreContatto);

    }

//Sezione chat con Handlebars

    var source = $('#messaggio-template').html();
    var template = Handlebars.compile(source);


    function creaMsg(testoMsg, sentReceived , ora , selettoreConversazione) {
        var datiMessaggio = {
            testoMessaggio: testoMsg,
            direzione: sentReceived,
            orario:ora
        };

        var templateMessaggio = template(datiMessaggio);
        $(selettoreConversazione).append(templateMessaggio);
    }

    var messaggiArchiviati = {

        c1: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Fabio come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
        c2: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Francesca come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
        c3: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Carlo come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
        c4: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Mario come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
        c5: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Paolo come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
        c6: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Simone come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
        c7: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Marco come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
        c8: [
            {                                 // Assemblo in un oggetto il contenuto del messaggio
                testoMessaggio: 'Ciao Maria come stai?',
                direzione: 'message-send',
                orario: mostraOra()
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'message-received',
                orario: mostraOra()
            }
        ],
    };



    for (var convKey in messaggiArchiviati) {

        var numeroConversazione = convKey[1];

        for (var i = 0; i < convKey.length; i++) {
            var oggettoMessaggio = messaggiArchiviati[convKey][i];
            var testoMessaggio = oggettoMessaggio.testoMessaggio;
            var direzione = oggettoMessaggio.direzione;
            var timeMessage = oggettoMessaggio.orario;

            var selettoreConversazione = $('.chat-container[data-utente="' + numeroConversazione + '"]');
            creaMsg(testoMessaggio, direzione, timeMessage , selettoreConversazione);
        }
    }

    function sendMessage() {
         var testoMessaggio = $('#message-text').val();
         var orarioMessaggio = mostraOra();
         if(testoMessaggio.trim().length > 0) {
              $('#message-text').val('');
              creaMsg(testoMessaggio, 'message-send' , orarioMessaggio , '.chat-container.chat-active');
              scroll();
              setTimeout(function() {
                   creaMsg('ok', 'message-received' , orarioMessaggio , '.chat-container.chat-active');
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
