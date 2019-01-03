/*ÉÌÆ·*/
$(".a").hover(
    function(){
        $(this).toggleClass("hover")
    }
);
$(".icon img").on("click",function(){
        var $img=$(this);
        var i=parseInt($img.attr("alt"))
        i++;
        if(i==3) i=1;
        $img.attr({ src:`../img/${i}.gif`, alt:i });
});
$(".accordion").on("click",".title",e=>
$(e.target).next(".content").toggleClass("in")
    .siblings(".content").removeClass("in")
);
