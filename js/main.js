$(document).ready(function() {

    let cantidad=0;
    let windowwidth= $(window).width();
    if (windowwidth<600) {
        $(".container").css("grid-template-columns","auto auto auto auto")
    }
    loadcartas(20,flip);


    //Funciones!




    function loadcartas(n,cb) {
        var numImg = Array.from({length: n}, (_, i) => i + 1)
        numImg.sort(function() { return 0.5 - Math.random() });

        for (let i = 1; i < n+1; i++) {
            var nroImg = numImg[i-1]-10*Math.floor(numImg[i-1]/10.1);
            
            $("#container").append('<div class="carta" id="carta'+i+'"</div>')
            $("#carta"+i).append('<div class="carta__cara carta__cara--front" id="cartaFront'+i+'"> <img src="/img/front.svg" alt="" class="imagen"> </div>')
            $("#carta"+i).append('<div class="carta__cara carta__cara--back" id="cartaBack'+i+'"</div>')
            $("#cartaBack"+i).append('<img src="/img/img'+nroImg+'.svg" alt="" class="imagen imgBack img'+nroImg+'">')    
        }
       cb()
    }

    function flip() {
        let clases = [];
        let cartaBack = [];
        let cartaFront = [];
        let cartaId = [];
        let delayedFlip;
        let delayedFade;
        $('.carta').click(function () {
            cantidad+=1;
            if (cantidad<2) {
                clearTimeout(delayedFlip);
                $('.carta').removeClass("is-flipped")
                cartaFront[cantidad-1] = $(this).find(".carta__cara--front").attr("id");
                cartaBack[cantidad-1] = $(this).find(".carta__cara--back").attr("id");
                clases[cantidad-1] = $(this).find(".imgBack").attr('class');
                cartaId[cantidad-1] = $(this).attr('id');
                $(this).toggleClass("is-flipped");
            }else if (cantidad==2){
                cartaFront[cantidad-1] = $(this).find(".carta__cara--front").attr("id");
                cartaBack[cantidad-1] = $(this).find(".carta__cara--back").attr("id");
                clases[cantidad-1] = $(this).find(".imgBack").attr('class');
                cartaId[cantidad-1] = $(this).attr('id');
                $(this).toggleClass("is-flipped");
                if (check(clases,cartaId)){
                    clearTimeout(delayedFlip);
                    $("#"+cartaId[0]).off();
                    $("#"+cartaId[1]).off();
                    $("#"+cartaBack[0]).css('opacity','0');
                    $("#"+cartaBack[1]).css('opacity','0');
                    $("#"+cartaFront[0]).css('opacity','0');
                    $("#"+cartaFront[1]).css('opacity','0');
                    cantidad=0;
                } else {
                    delayedFlip = setTimeout(function(){
                        $('.carta').removeClass("is-flipped")
                    },1500)
                    cantidad=0; 
                }
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

