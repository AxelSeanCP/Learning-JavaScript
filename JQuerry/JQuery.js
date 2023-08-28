$(document).ready(function(){ //mencegah supaya jquery gak jalan sebelum dom selesai
    //syntax :
    //$("p").hide(); $("") -> css selectors contoh : $("p"), $(".class"), $("#id") ; .function() -> function setelah selector
    //selector lebih lengkap di w3schools
    /*
    $("button").click(function(){
        $("p").hide();
    });
    */

    $("#p1").mouseenter(function(){
        $(this).css("color", "red"); //change css
    });

    $("#p2").hover(function(){
        $(this).css("color", "blue");
    },
    function(){
        $(this).css("color", "black");
    });

    /*
    $("#btn2").on("click", function(){
        $(this).hide();
    });
    */

    //input lebih dari 1 event
    $("#btn2").on({
        mouseenter: function(){
            $(this).css("background-color", "red");
        },
        mouseleave: function(){
            $(this).css("background-color", "aqua");
        },
        click: function(){
            $(this).css("background-color", "blue");
        }
    });

    //info lebih lanjut di w3school jquery effects
    //jquery hide / show (2 parameter) 
    //$("p").hide(); $("p").show();
    //$("p").toggle(); elemen yang tershow di hide dan elemen yang di hide di show

    /*jquery fade (2 parameter)
    $("p").fadeIn(); buat masuk
    $("p").fadeOut(); buat keluar
    $("p").fadeToggle(); buat masuk keluar
    $("p").fadeTo(); bisa pilih arah sama kecepatan*/
    
    /*jquery slide (2 parameter)
    $("p").slideDown(); buat masuk
    $("p").slideUp(); buat keluar
    $("p").slideToggle(); masuk keluar
    */

    /*jquery animations
    $("p").animate() 
    $("#animate").click(function(){
        $(".div-animate").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px', //bisa pake relative value += / -= (taruh di depan), asli 100px += 150px jadi 250px
            width: '150px' //bisa juga height: 'toggle'
        });
    });
    */
    //animasi jalan satu persatu
    $("#animate").click(function(){
        var div = $(".div-animate");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        //contoh lain
        //div.animate({left: '100px'}, "slow");
        //div.animate({fontSize: '3em'}, "slow");
    });

 });