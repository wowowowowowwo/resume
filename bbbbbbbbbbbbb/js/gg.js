
var ww = $(window).width();
$(window).resize(function() {
    var w = $(window).width();
    if (ww != w) {
        location.replace(location);
    }
});

$(document).ready(function(){
    $("img").removeAttr('title');
    $("img").removeAttr('alt');
    $("img").removeAttr('width');
    $("img").removeAttr('height');
});




if($('.banner').length>0){

    $(window).scroll(function () {

        var aimHeight = $('.banner').height()-0;
        /*	var aimHeight = 80;*/

        if ($(this).scrollTop() >= aimHeight) {

            $('.dh').addClass('scroll');

        } else {

            $('.dh').removeClass('scroll');


        }

    });

}else {

    /*	$('.dh').addClass('scroll');*/


}


if($('.h_cp_n_T_li').length>0){
    $('.marquee1').kxbdSuperMarquee({
        distance:400,
        time:3,
        btnGo:{left:'#goL',right:'#goR'},
        direction:'left'
    });
}


if($('.h_cp_n').length>0){

    $(function(){
        $(document).ready(function(e) {
            $(".h_cp_n_T_li").css("display","none");
            $(".h_cp_n_T_li").eq(0).css("display","block");

            $(".h_cp_n_T_tit a").mouseover(function(e) {
                $(".h_cp_n_T_tit a").removeClass("cur");
                $(this).addClass("cur");
                $(".h_cp_n_T_li").css("display","none");

                $thiss=".h_cp_n_T_li_"+$(this).index();
                $($thiss).css("display","block")
            });

        });
    })
}



$(function () {
    var thisgourl = window.location.pathname;
    var thisurl = location.href.toLowerCase();
    if (thisurl.indexOf("index") >= 0 || thisgourl == "/") {
        var thisa = $('.dh_n_r a').eq(0);
        thisa.addClass('cur');
    }
    else if (thisurl.indexOf("introduction") >= 0||thisurl.indexOf("honor") >= 0) {
        var thisa = $('.dh_n_r a').eq(1);
        thisa.addClass('cur');

    }
    else if (thisurl.indexOf("news") >= 0) {
        var thisa = $('.dh_n_r a').eq(2);
        thisa.addClass('cur');

    }
    else if (thisurl.indexOf("product") >= 0) {
        var thisa = $('.dh_n_r a').eq(3);
        thisa.addClass('cur');
    }

    else if (thisurl.indexOf("job") >= 0) {
        var thisa = $('.dh_n_r a').eq(4);
        thisa.addClass('cur');
    }
    else if (thisurl.indexOf("lxwm") >= 0) {
        var thisa = $('.dh_n_r a').eq(5);
        thisa.addClass('cur');

    }
})


if($('#marquee4').length>0){


    $('#marquee4').kxbdSuperMarquee({
        isAuto:false,
        distance:300,
        btnGo:{left:'#goL2',right:'#goR2'},
        direction:'left'
    });


}

if($('.marqueebox_pr').length>0){
    $(function(){
        $('#marquee3pr').kxbdSuperMarquee({
            distance:565,
            time:4,
            navId:'#mar3prNav',
            direction:'left'
        });
    });
}










