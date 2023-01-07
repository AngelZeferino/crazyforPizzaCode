const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
btn.addEventListener('click',() => {
menu.classList.toggle("hidden");
});

const toTop =document.querySelector(".to-top");

window.addEventListener("scroll",() =>{
    if(window.pageYOffset >100){
        toTop.classList.add("active");
    }else{
    toTop.classList.remove("active");
    }
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
});


