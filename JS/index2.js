$(document).ready(function (){   
    $(window).resize(function(){
        MQ=$("body").width();
        St=$('#style');
    if (801<=MQ<=1400){
        St[0].attributes.href.value="../css/style.css";
    }
    if (400<=MQ<=800) {
        St[0].attributes.href.value="../css/g.css";

    }
        })
})