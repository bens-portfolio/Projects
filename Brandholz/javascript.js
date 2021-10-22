const btn = document.getElementById("cookie");

document.getElementById('cookie').onclick = function(){
    if(btn.value == "activated"){
    alert("keks 🍪");
    document.getElementById("cookie").style.display = "none";
    document.getElementById("nothing").style.display = "block";
    }else{
    document.getElementById("cookie").innerHTML="nan"
    }
};


jQuery(function(){

    setTimeout(function() {
        switchtext();
    },800);

    function switchtext(){
        $("#switch").html("BRAND neues Brennholz");
        setTimeout(function() {
        $("#switch").html("NUR hier")
        },1000);
        setTimeout(function() {
        switchtext();
        },2000);
    };



});