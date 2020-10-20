$(document).ready(function() {

    let cantidad=0;


    loadcartas(20,flip);





    //Funciones!




    function loadcartas(n,cb) {
        var numImg = Array.from({length: n}, (_, i) => i + 1)
        numImg.sort(function() { return 0.5 - Math.random() });

        for (let i = 1; i < n+1; i++) {
            var nroImg = numImg[i-1]-10*Math.floor(numImg[i-1]/10.1);
            
            $("#container").append('<div class="carta" id="carta'+i+'"</div>')
            $("#carta"+i).append('<div class="carta__cara carta__cara--front"> <img src="/img/front.svg" alt="" class="imagen"> </div>')
            $("#carta"+i).append('<div class="carta__cara carta__cara--back" id="cartaBack'+i+'"</div>')
            $("#cartaBack"+i).append('<img src="/img/img'+nroImg+'.svg" alt="" class="imagen imgBack img'+nroImg+'">')    
        }
       cb()
    }

    function flip() {
        var clases = [];
        var cartas = [];
        var cartaId = [];
        $('.carta').click(function () {
            
            if (cantidad<2) {
                cartas[cantidad] = $(this).attr("id");
                clases[cantidad] = $(this).find(".imgBack").attr('class');
                cartaId[cantidad] = $(this).attr('id');
                $(this).toggleClass("is-flipped");
                cantidad+=1;
            }else if (cantidad==2){
                if (check(clases,cartaId)){
                    //$("#"+cartas[0]).fadeOut("slow")
                    //$("#"+cartas[1]).fadeOut("slow")
                    $("#"+cartas[0]).css('opacity','0');
                    $("#"+cartas[1]).css('opacity','0');
                    cantidad=0;
                } else {
                    $('.carta').removeClass("is-flipped")
                    cantidad=0;
                }
            }else {
                $('.carta').removeClass("is-flipped")
                cantidad=0;
            } 
        })
    }
    
    function check(val1,val2) {
        if ((val1[0]==val1[1]) && (val2[0] != val2[1])) {
            return true
        }else {
            return false
        }

    }
    

})

