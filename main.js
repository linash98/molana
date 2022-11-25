let scrollbtn = $("#btn_top");


$(window).scroll(function (){
    $(this).scrollTop()>= 200 ? scrollbtn.show() : scrollbtn.hide();
});
$(scrollbtn).click(function(){
    $("html,body").animate({
        scrollTop: 0
    },1500);
});
// ==========
let btn_btn = document.querySelector(".navbar .navbar-toggler");
let collapse = document.querySelector(".collapse");


btn_btn.onclick = function(){
    collapse.classList.toggle("active");
};
// ===========

let comment = $("#comment");
let name = $("#name");
let e_mail = $("#e_mail");

let btn_area = $("#btn_area");

btn_area.click(function(){
    comment.show();
    name.show();
    e_mail.show();
})