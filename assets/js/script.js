$(function(){
    $('#dock').Fisheye(
        {
            maxWidth: 68,
            items: 'a',
            itemsText: 'span',
            container: '.dock-container',
            itemWidth: 34,
            proximity: 68,
            alignment : 'left',
            valign: 'bottom',
            halign : 'center'
        }
    );

    $("body").delegate('.dock-item', "click", function(){
        var _this = $(this);

        var modalidade = _this.attr('data-modalidade');

        console.log("Go to: " + modalidade);

        $('#infografico').find('img').attr("src", "assets/img/infograficos/" + modalidade + ".jpg");
        $('#mascote').find('img').attr("src", "assets/img/mascote/" + modalidade + ".png");

    });

    var data = [
        {
            "name": "Arco e flecha",
            "image": "arco_e_flecha"
        },
        {
            "name": "Atletismo",
            "image": "atletismo"
        },
        {
            "name": "Basquete",
            "image": "basquete"
        },
        {
            "name": "Bocha",
            "image": "bocha"
        },
        {
            "name": "Canoagem",
            "image": "canoagem"
        },
        {
            "name": "Ciclismo",
            "image": "ciclismo"
        },
        {
            "name": "Esgrima",
            "image": "esgrima"
        },
        {
            "name": "Futebol de 5",
            "image": "fut_5"
        },
        {
            "name": "Futebol de 7",
            "image": "fut_7"
        },
        {
            "name": "Goalball",
            "image": "goalball"
        },
        {
            "name": "Halterofilismo",
            "image": "halterofilismo"
        },
        {
            "name": "Hipismo",
            "image": "hipismo"
        },
        {
            "name": "Judô",
            "image": "judo"
        },
        {
            "name": "Natação",
            "image": "natacao"
        },
        {
            "name": "Remo",
            "image": "remo"
        },
        {
            "name": "Rugby",
            "image": "rugby"
        },
        {
            "name": "Tênis",
            "image": "tenis"
        },
        {
            "name": "Tênis de mesa<",
            "image": "tenis_mesa"
        },
        {
            "name": "Tiro",
            "image": "tiro"
        },
        {
            "name": "Triatlo",
            "image": "triatlo"
        },
        {
            "name": "Vela",
            "image": "vela"
        },
        {
            "name": "Voleibol",
            "image": "voleibol"
        }
    ];

    $(data).each(function () {
        var output = "";
        output += "<li>";
        output += "<a data-modalidade='" + this.image + "' class='dock-item'>";
        output += "<img width='36' src='assets/img/picto/" + this.image + ".png' alt='' /> ";
        output += this.name
        output += "</a></li>";
        $('#placeholder ul').append(output);
    });

    $("#placeholder").hide();

    $('#buscar-modalidades').keyup(function () {
        var yourtext = $(this).val();
        if (yourtext.length > 0) {
            $("#placeholder").show();
            var abc = $("li").filter(function () {
                var str = $(this).text();
                var re = new RegExp(yourtext, "i");
                var result = re.test(str);
                if (!result) {
                    return $(this);
                }
            }).hide();
        } else {
            $("#placeholder").show();
            $("li").show();
        }
    });

    $('#buscar-modalidades-container').on('mouseleave', function(){
        $("#placeholder").hide();
    });



});
