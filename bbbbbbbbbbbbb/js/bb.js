var popWin = {
    scrolling: 'no',
    int: function() {
        this.mouseClose();
        this.closeMask();
    },
    showWin: function(width, height, title, src) {
        var iframeHeight = height - 52;
        var marginLeft = width / 2;
        var marginTop = height / 2;
        var inntHtml = '';
        inntHtml += '<div id="mask" style="width:100%; height:100%; position:fixed; top:0; left:0; z-index:1999;background:#000; filter:alpha(opacity=75); -moz-opacity:0.75; -khtml-opacity: 0.75; opacity:0.75;"></div>'
        inntHtml += '<div id="maskTop" style="width: ' + width + 'px; height: ' + 680+ 'px; position: fixed; top: 50%; left: 50%; margin-left: -' + marginLeft + 'px; margin-top: -' + 340+ 'px; z-index: 2999; filter: progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);">'
        inntHtml += '<div id="maskTitle" style="position: relative;">'
        inntHtml += '' + title + ''
        inntHtml += '<div id="popWinClose" style="width: 54px; height: 54px; cursor: pointer; position: absolute; top: -12px; right:45px;"></div>'
        inntHtml += '</div>'
        inntHtml += '<iframe width="' + width + '" height="' + 680+ '" frameborder="0" scrolling="' + this.scrolling + '" src="' + src + '"></iframe>';
        $("body").append(inntHtml);
        this.int();
    },
    mouseClose: function() {
        $("#popWinClose").on('mouseenter',
            function() {
                $(this).css("background-image", "url(../img/x.png)");
            });
        $("#popWinClose").on('mouseleave',
            function() {
                $(this).css("background-image", "url(../img/x.png)");
            });
    },
    closeMask: function() {
        $("#popWinClose").on('click',
            function() {
                $("#mask,#maskTop").fadeOut(function() {
                    $(this).remove();

                });

            });

    }
};