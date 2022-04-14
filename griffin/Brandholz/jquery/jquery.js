
var picturescounter = 0;
var pictures = ['../../images/birchshop.jpg', '../../images/eicheshop.jpg', '../../images/soldout.png', '../../images/soldout.png', '../../images/soldout.png',];
var names = ['Birkenholz 20€', 'Eiche 45€', 'Buche 30€ (Ausverkauft)', 'Ahorn 30€ (Ausverkauft)', 'Esche 30€ (Ausverkauft)',];

jQuery(function(){


    $('#end').disableSelection();
    $(".alert-container").hide()

    $(".inhalt").hide()
    $(".footer").hide()
    $(".header").hide()
    setTimeout(function() {
        $(".header").fadeIn("slow")
    },200);
    setTimeout(function() {
        $(".inhalt").fadeIn("slow")
        $(".footer").show()
    },500);

    setTimeout(function() {
        switchtext();
    },800);
    
    function switchtext(){
        $("#switch").html("Durchsuche unsere Holzvielfalt");
        setTimeout(function() {
        $("#switch").html("Der beste Holzshop Online!")
        },1000);
        setTimeout(function() {
        switchtext();
        },2000);
    };

    
    $("#alertbtn").click(function(){
        $(".alert-container").show()
    });

    $("#btnclose").click(function(){
        $(".alert-container").hide()
    });



    console.log("test");
    $("#switchright").click(function(){
        pictureswitch(1);
    });
    
    $("#switchleft").click(function(){
        pictureswitch(-1);
    });
    
    
    
});

function pictureswitch(count = 1){
    picturescounter = picturescounter + count;
    if (picturescounter < 0) {
        picturescounter = pictures.length - 1;
    } else if (picturescounter >= pictures.length) {
        picturescounter = 0
    } 

    $("#wood").css("opacity", "0")
    setTimeout(function(){
        $("#wood").attr('src', pictures[picturescounter]);
        $("#wood").css("opacity", "1")
    },200)

    $("#shoppingname").html(names[picturescounter]);

};

$( function() {
    $( "#accordion" ).accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });

    $( "#accordion2" ).accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });
  } );