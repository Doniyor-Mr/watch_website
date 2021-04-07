

function setActiveStyle(colorName) {
    $(".alternate-style").attr("disabled",true);
    $(".alternate-style[title="+colorName+"]").removeAttr('disabled');
}
//  open tugmasiga bosganda ociladi

$('.toggle-style-switcher').click(function (){
    $('.style-switcher').toggleClass("open")
})