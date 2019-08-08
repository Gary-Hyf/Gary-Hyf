var MQ=window.screen.width;
var St=document.getElementById('style');
if (801<=MQ<=1400){
    St.removeAttribute('href');
    St.setAttribute('href',"../css/style.css");
}
if (MQ<=800) {
    St.removeAttribute('href');
    St.setAttribute('href',"../css/g.css");

}



