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
 });