$(document).ready(function() {

    var cantidad=0;


    loadcartas(20,flip);





    //Funciones!




    function loadcartas(n,cb) {
        var numImg = Array.from({length: n}, (_, i) => i + 1)
        numImg.sort(function() { return 0.5 - Math.random() });

        for (let i = 1; i < n+1; i++) {
            var nroImg = numImg[i-1]-10*Math.floor(numImg[i-1]/10.1);
            
            $("#container").append('<div class="carta" id="carta'+i+'"</div>')
            $("#carta"+i).append('<div class="carta__cara carta__cara--front"</div>')
            $("#carta"+i).append('<div class="carta__cara carta__cara--back" id="cartaBack'+i+'"</div>')
            $("#cartaBack"+i).append('<img src="/img/img'+nroImg+'.svg" alt="" class="imagen img'+nroImg+'">')    
        }
       cb()
    }

    function flip() {
        $('.carta').click(function () {
            if (cantidad<2) {
                $(this).toggleClass("is-flipped")
                cantidad+=1;
                if (condition) {
                    
                }
            } else {
                $('.carta').removeClass("is-flipped")
                cantidad=0;
            }
            
            

            
        })
    }
    
    

})

