var picturescounter = 0;
var pictures = ['img/lorempicsum1.jpeg', 'img/lorempicsum2.jpeg', 'img/lorempicsum3.jpeg', ];
var sliderpoints = ['#sliderpoint1', '#sliderpoint2', '#sliderpoint3', ]
var names = ['Projekt 1', 'Projekt 2', 'Projekt 3', ];


$(document).ready(function ScrollClick(){
    $('#aboutdown').click(function(){
        $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
    });
    $('#homedown').click(function(){
        $("html, body").animate({ scrollTop: $("#home").offset().top }, 1000);
    });
    $('#scroll-down-1').click(function(){
        $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
    });
    $('#scroll-down-2').click(function(){
        $("html, body").animate({ scrollTop: $("#thats-me").offset().top }, 1000);
    });
    $('#scroll-down-3').click(function(){
        $("html, body").animate({ scrollTop: $("#projects").offset().top }, 1000);
    });
    $('#scroll-down-4').click(function(){
        $("html, body").animate({ scrollTop: $("body").offset().top }, 1000);
    });
});

jQuery(function(){

$("#sliderpoint1").css("fill","white");

$(window).scroll(function(){
if($(window).scrollTop() === 0) {
    $(".navbar").css({opacity: "100%", transition: "0.5s"});
} else($('.navbar').css({opacity: "50%", transition: "0.5s"})
)});

console.log("test");
$("#switchright").click(function(){
    pictureswitch(1);
});

$("#switchleft").click(function(){
    pictureswitch(-1);
});


function pictureswitch(count = 1){
    picturescounter = picturescounter + count;
    $("#sliderpoint1").css("fill", "gray");
    $("#sliderpoint2").css("fill", "gray");
    $("#sliderpoint3").css("fill", "gray");
    if (picturescounter < 0) {
        picturescounter = pictures.length - 1;
    } else if (picturescounter >= pictures.length) {
        picturescounter = 0
    } 
    if (picturescounter < 0) {
        picturescounter = sliderpoints.length - 1;
    } else if (picturescounter >= sliderpoints.length) {
        picturescounter = 0
    } 

    $("#slider").fadeOut("fast")
    setTimeout(function(){
        $("#slider").attr('src', pictures[picturescounter]);
        $("#slider").fadeIn("fast");
         $(sliderpoints[picturescounter]).css({fill: "white", transition: "0.5s"});


    },200)

    $("#shoppingname").html(names[picturescounter]);

};

});