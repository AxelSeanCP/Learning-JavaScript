$(document).ready(function(){ //mencegah supaya jquery gak jalan sebelum dom selesai
    //syntax :
    //$("p").hide(); $("") -> css selectors contoh : $("p"), $(".class"), $("#id") ; .function() -> function setelah selector
    //selector lebih lengkap di w3schools
    /*
    $("button").click(function(){
        $("p").hide();
    });
    
    $("#p1").mouseenter(function(){
        $(this).css("color", "red"); //change css
    });
    
    $("#p2").hover(function(){
        $(this).css("color", "blue");
    },
    function(){
        $(this).css("color", "black");
    });
    
    */
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

    /*jquery stop
    $(selector).stop(stopAll,goToEnd);
    //stopAll default false, true -> animasi yang aktif sekarang berhenti tapi selanjutnya jalan, false -> berhenti semua
    //goToEnd (optional) default false -> menentukan apakah diselesaikan langsung animasi yang sedang jalan
    */ 
    $("#stop").click(function(){
        $("#panel").stop();
    });
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });

    /*jquery callback function
    $(selector).hide(speed,callback);
    //callback function hanya jalan ketika animasi/function-nya sudah selesai, contoh :
    //alert muncul sebelum selesai hide
    $("#btn5").click(function(){
        $("#p3").hide("slow");
        alert("The paragraph is now hidden");
    });
    //baru alert setelah paragraph di hide
    $("#btn5").click(function(){
        $("#p3").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
    */

    /*jquery chaining*/
    //$("#p4").css("color", "magenta").slideUp(2000).slideDown(2000);
    $("#p4").css("color", "magenta")
    .slideUp(2000)
    .slideDown(2000);

    /*jquery DOM
    .text() - set / return text content element
    .html() - set / return html element
    .val() - set / return value element*/

    //get
    /*
    $("#btn6").click(function(){
        alert("Text : "+ $("#test").text());
    });
    $("#btn7").click(function(){
        alert("Html : "+ $("#test").html());
    });
    $("#btn8").click(function(){
        alert("Val : "+ $("#testInput").val());
    });
    */

    //get attribute
    $("#btn9").click(function(){
        alert($("#btn9").attr("id"));
    })

    //set
    /*
    $("#btn6").click(function(){
        $("#test").text("Hello World!");
    });
    $("#btn7").click(function(){
        $("#test").html("<b>Hello World!</b>");
    });
    $("#btn8").click(function(){
        $("#testInput").val("Johnny Joestar");
    });
    */
    
    //set + callback function
    $("#btn10").click(function(){
        $("#test").text(function(i, origText){
            return "Old text: " + origText + " New Text: Hello World (index: " + i + ")";
        });
    });
    $("#btn11").click(function(){
        $("#test").html(function(i, origText){
            return "Old Html: " + origText + " New Html: <b>Hello World</b> (index: "+ i + ")";
        });
    });

    //set attr
    $("#btn12").click(function(){
        $("#link1").attr({
            "href" : "https://youtu.be/xf3NBEqkhDo?si=bNAK8Te-zMKXwxCt",
            "title" : "Meltryllis Voice Lines" 
        });
    });

    //set attr + callback function mirip sama text & html, selengkapnya di w3school

    /*jquery add content
    .append() insert content di akhir
    .prepend() insert content di awal
    .after() insert content setelah elemen yang dipilih
    .before() insert content sebelum elemen yang dipilih
    $("p").append("Some appended text");
    var txt = $("<p></p>").text("Text."); //create new element*/

    /*jquery remove content
    .remove() remove elemen yang dipilih dan childnya
    .empty() remove child elemen yang dipilih
    $("p").remove(".test, .demo") remove p yang classnya test dan demo */

    /*jquery CSS Classes
    .addClass() nambah 1/lebih class ke elemen
    .removeClass() remove 1/lebih class ke elemen
    .toggleClass() nambah/remove class di elemen yg dipilih
    .css() set / return attribute style 
    
    $("#btn1").click(function(){
        $("#p1").addClass("important blue");
    });
    
    */
    $("#btn1").click(function(){
        $("#p1").toggleClass("important blue");
    });

    /*jquery css()
    .css("property","value");
    $("p").css({"background-color": "yellow", "font-size": "20%"}); */

    /*jquery dimensions
    .width()
    .height()
    .innerWidth()
    .innerHeight()
    .outerWidth()
    .outerHeight()
     */

    /*jquery traversing dom tree
    //up
    .parent() return parent element
    .parents() return all parent element
    .parentsUntil()
    //down
    .children() return direct children single level
    .find("*" / "span") return all descendant or all span that are the descendant
    //sideways
    .siblings()
    .next()
    .nextAll()
    .nextUntil()
    .prev()
    .prevAll()
    .prevUntil()
    //filtering
    .first() //return the first element
    .last()
    .eq() //return with the specified index number
    .filter() //return only specified
    .not() //reverse filter
     */

 });