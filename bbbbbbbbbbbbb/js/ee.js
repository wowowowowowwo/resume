
/*������������
 ------------------------------------------------*/
var pageurl = window.location.search;
if(pageurl == '?m2w') {
    addCookie('m2wcookie', '1', 0);
}
if(getCookie('m2wcookie') != '1' && browserRedirect()) {
    location.href = 'http://m.jkfoods.cn';
}
/*�����෽��
 ------------------------------------------------*/
//����Ƿ��ƶ��豸����
function browserRedirect() {
    var sUserAgent= navigator.userAgent.toLowerCase();
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid= sUserAgent.match(/android/i) == "android";
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}
//дCookie
function addCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) {//Ϊ0ʱ���趨����ʱ�䣬������ر�ʱcookie�Զ���ʧ
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

//��Cookie
function getCookie(objName) {//��ȡָ�����Ƶ�cookie��ֵ
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
    return "";
}
//�������뺯��
function ForDight(Dight, How) {
    Dight = Math.round(Dight * Math.pow(10, How)) / Math.pow(10, How);
    return Dight;
}
//ֻ������������
function checkNumber(e) {
    var keynum = window.event ? e.keyCode : e.which;
    if ((48 <= keynum && keynum <= 57) || (96 <= keynum && keynum <= 105) || keynum == 8) {
        return true;
    } else {
        return false;
    }
}
//ֻ��������С��
function checkForFloat(obj, e) {
    var isOK = false;
    var key = window.event ? e.keyCode : e.which;
    if ((key > 95 && key < 106) || //С�����ϵ�0��9  
        (key > 47 && key < 60) ||  //������ϵ�0��9  
        (key == 110 && obj.value.indexOf(".") < 0) || //С�����ϵ�.������ǰû������.  
        (key == 190 && obj.value.indexOf(".") < 0) || //������ϵ�.������ǰû������.  
        key == 8 || key == 9 || key == 46 || key == 37 || key == 39) {
        isOK = true;
    } else {
        if (window.event) { //IE
            e.returnValue = false;   //event.returnValue=false Ч����ͬ.    
        } else { //Firefox 
            e.preventDefault();
        }
    }
    return isOK;
}
//�����ı�
function copyText(txt){
    window.clipboardData.setData("Text",txt);
    var d = dialog({content:'���Ƴɹ�������ͨ��ճ�������ͣ�'}).show();
    setTimeout(function () {
        d.close().remove();
    }, 2000);
}
//�л���֤��
function ToggleCode(obj, codeurl) {
    $(obj).children("img").eq(0).attr("src", codeurl + "?time=" + Math.random());
    return false;
}
//ȫѡȡ����ť������������ʽ�磺
function checkAll(chkobj){
    if($(chkobj).text()=="ȫѡ"){
        $(chkobj).text("ȡ��");
        $(".checkall").prop("checked", true);
    }else{
        $(chkobj).text("ȫѡ");
        $(".checkall").prop("checked", false);
    }
}
//Tab����ѡ�
function tabs(tabObj, event) {
    //���¼�
    var tabItem = $(tabObj).find(".tab-head ul li a");
    tabItem.bind(event,  function(){
        //���õ������л���ʽ
        tabItem.removeClass("selected");
        $(this).addClass("selected");
        //���õ������л�����
        var tabNum = tabItem.parent().index($(this).parent());
        $(tabObj).find(".tab-content").hide();
        $(tabObj).find(".tab-content").eq(tabNum).show();
    });
}

//��ʾ��������
function showWindow(obj){
    var tit = $(obj).attr("title");
    var box = $(obj).html();
    dialog({
        width:500,
        title:tit,
        content:box,
        okValue:'ȷ��',
        ok:function (){ }
    }).showModal();
}

/*ҳ�漶ͨ�÷���
 ------------------------------------------------*/
//���ܸ����㺯��
$.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        var w = element.innerWidth();
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        width: w,
                        position: "fixed",
                        top: 55
                    });
                } else {
                    element.css({
                        top: scrolls
                    });
                }
            }else {
                element.css({
                    position: pos,
                    top: top
                });
            }
        });
    };
    return $(this).each(function() {
        position($(this));
    });
};
//������ѯ
function SiteSearch(send_url, divTgs, channel_name) {
    var strwhere = "";
    if (channel_name !== undefined) {
        strwhere = "&channel_name=" + channel_name
    }
    var str = $.trim($(divTgs).val());
    if (str.length > 0 && str != "����ؽ���") {
        window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val()) + strwhere;
    }
    return false;
}
//��������
function downLink(point, linkurl){
    if(point > 0){
        dialog({
            title:'��ʾ',
            content:"������۳�" + point + "������<br />�ظ����ز��ۻ��֣���Ҫ������",
            okValue:'ȷ��',
            ok:function (){
                window.location.href = linkurl;
            },
            cancelValue: 'ȡ��',
            cancel: function (){}
        }).showModal();
    }else{
        window.location.href = linkurl;
    }
    return false;
}
//������ֶһ�
function numConvert(obj){
    var maxAmount = parseFloat($("#hideAmount").val()); //�ܽ��
    var pointCashrate = parseFloat($("#hideCashrate").val()); //�һ�����
    var currAmount = parseFloat($(obj).val()); //��Ҫת���Ľ��
    if(currAmount > maxAmount){
        currAmount = maxAmount;
        $(obj).val(maxAmount);
    }
    var convertPoint = currAmount * pointCashrate;
    $("#convertPoint").text(convertPoint);
}

//ִ��ɾ������
function ExecDelete(sendUrl, checkValue, urlObj){
    //��鴫���ֵ
    if (!checkValue) {
        dialog({title:'��ʾ', content:'�Բ�����ѡ����Ҫ�����ļ�¼��', okValue:'ȷ��', ok:function (){}}).showModal();
        return false;
    }
    dialog({
        title: '��ʾ',
        content: 'ɾ����¼�󲻿ɻָ�����ȷ����',
        okValue: 'ȷ��',
        ok: function () {
            $.ajax({
                type: "POST",
                url: sendUrl,
                dataType: "json",
                data: {
                    "checkId": checkValue
                },
                timeout: 20000,
                success: function(data, textStatus) {
                    if (data.status == 1){
                        var tipdialog = dialog({content:data.msg}).show();
                        setTimeout(function () {
                            tipdialog.close().remove();
                            if($(urlObj)){
                                location.href = $(urlObj).val();
                            }else{
                                location.reload();
                            }
                        }, 2000);
                    } else {
                        dialog({title:'��ʾ', content:data.msg, okValue:'ȷ��', ok:function (){}}).showModal();
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    dialog({title:'��ʾ', content:'״̬��' + textStatus + '��������ʾ��' + errorThrown, okValue:'ȷ��', ok:function (){}}).showModal();
                }
            });
        },
        cancelValue: 'ȡ��',
        cancel: function () { }
    }).showModal();
}

//����ִ��AJAX�������
function clickSubmit(sendUrl){
    $.ajax({
        type: "POST",
        url: sendUrl,
        dataType: "json",
        timeout: 20000,
        success: function(data, textStatus) {
            if (data.status == 1){
                var d = dialog({content:data.msg}).show();
                setTimeout(function () {
                    d.close().remove();
                    location.reload();
                }, 2000);
            } else {
                dialog({title:'��ʾ', content:data.msg, okValue:'ȷ��', ok:function (){}}).showModal();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            dialog({title:'��ʾ', content:"״̬��" + textStatus + "��������ʾ��" + errorThrown, okValue:'ȷ��', ok:function (){}}).showModal();
        }
    });
}

//=====================������֤�ʼ�=====================
function sendEmail(username, sendurl) {
    if(username == ""){
        dialog({title:'��ʾ', content:'�Բ����û���������Ϊ�գ�', okValue:'ȷ��', ok:function (){}}).showModal();
        return false;
    }
    //�ύ
    $.ajax({
        url: sendurl,
        type: "POST",
        timeout: 60000,
        data: { "username": username },
        dataType: "json",
        success: function (data, type) {
            if (data.status == 1) {
                var d = dialog({content:data.msg}).show();
                setTimeout(function () {
                    d.close().remove();
                }, 2000);
            } else {
                dialog({title:'��ʾ', content:data.msg, okValue:'ȷ��', ok:function (){}}).showModal();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            dialog({title:'��ʾ', content:"״̬��" + textStatus + "��������ʾ��" + errorThrown, okValue:'ȷ��', ok:function (){}}).showModal();
        }
    });
}
//=====================�����ֻ�������֤��=====================
var wait = 0; //�������
function sendSMS(btnObj, valObj, sendUrl) {
    if($(valObj).val() == ""){
        dialog({title:'��ʾ', content:'�Բ�������д�ֻ�������ٻ�ȡ��', okValue:'ȷ��', ok:function (){}}).showModal();
        return false;
    }
    //����AJAX����
    $.ajax({
        url: sendUrl,
        type: "POST",
        timeout: 60000,
        data: { "mobile": $(valObj).val() },
        dataType: "json",
        beforeSend: function(XMLHttpRequest) {
            $(btnObj).unbind("click").removeAttr("onclick"); //�Ƴ���ť�¼�
        },
        success: function (data, type) {
            if (data.status == 1) {
                wait = data.time * 60; //��ֵʱ��
                time(); //���ü�����
                var d = dialog({content:data.msg}).show();
                setTimeout(function () {
                    d.close().remove();
                }, 2000);
            } else {
                $(btnObj).removeClass("gray").text("����ȷ����");
                $(btnObj).bind("click", function(){
                    sendSMS(btnObj, valObj, sendUrl); //���°��¼�
                });
                dialog({title:'��ʾ', content:data.msg, okValue:'ȷ��', ok:function (){}}).showModal();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            $(btnObj).removeClass("gray").text("����ȷ����");
            $(btnObj).bind("click", function(){
                sendSMS(btnObj, valObj, sendurl); //���°��¼�
            });
            dialog({title:'��ʾ', content:"״̬��" + textStatus + "��������ʾ��" + errorThrown, okValue:'ȷ��', ok:function (){}}).showModal();
        }
    });
    //����ʱ������
    function time(){
        if (wait == 0) {
            $(btnObj).removeClass("gray").text("����ȷ����");
            $(btnObj).bind("click", function(){
                sendSMS(btnObj, valObj, sendurl); //���°��¼�
            });
        }else{
            $(btnObj).addClass("gray").text("���·���(" + wait + ")");
            wait--;
            setTimeout(function() {
                time(btnObj);
            },1000)
        }
    }
}

/*��AJAX�ύ��װ(������֤)
 ------------------------------------------------*/
function AjaxInitForm(formObj, btnObj, isDialog, urlObj, callback){
    var argNum = arguments.length; //��������
    $(formObj).Validform({
        tiptype:3,
        callback:function(form){
            //AJAX�ύ��
            $(form).ajaxSubmit({
                beforeSubmit: formRequest,
                success: formResponse,
                error: formError,
                url: $(formObj).attr("url"),
                type: "post",
                dataType: "json",
                timeout: 60000
            });
            return false;
        }
    });

    //���ύǰ
    function formRequest(formData, jqForm, options) {
        $(btnObj).prop("disabled", true);
        $(btnObj).val("�ύ��...");
    }

    //���ύ��
    function formResponse(data, textStatus) {
        if (data.status == 1) {
            $(btnObj).val("�ύ�ɹ�");
            //�Ƿ���ʾ��Ĭ�ϲ���ʾ
            if(isDialog == 1){
                var d = dialog({content:data.msg}).show();
                setTimeout(function () {
                    d.close().remove();
                    if (argNum == 5) {
                        callback();
                    }else if(data.url){
                        location.href = data.url;
                    }else if($(urlObj).length > 0 && $(urlObj).val() != ""){
                        location.href = $(urlObj).val();
                    }else{
                        location.reload();
                    }
                }, 2000);
            }else{
                if (argNum == 5) {
                    callback();
                }else if(data.url){
                    location.href = data.url;
                }else if($(urlObj)){
                    location.href = $(urlObj).val();
                }else{
                    location.reload();
                }
            }
        } else {
            dialog({title:'��ʾ', content:data.msg, okValue:'ȷ��', ok:function (){}}).showModal();
            $(btnObj).prop("disabled", false);
            $(btnObj).val("�ٴ��ύ");
        }
    }
    //���ύ����
    function formError(XMLHttpRequest, textStatus, errorThrown) {
        dialog({title:'��ʾ', content:'״̬��'+textStatus+'��������ʾ��'+errorThrown, okValue:'ȷ��', ok:function (){}}).showModal();
        $(btnObj).prop("disabled", false);
        $(btnObj).val("�ٴ��ύ");
    }
}
//��ʾ����AJAX��ҳ�б�
function AjaxPageList(listDiv, pageDiv, pageSize, pageCount, sendUrl, defaultAvatar) {
    //pageIndex -ҳ��������ʼֵ
    //pageSize -ÿҳ��ʾ������ʼ��
    //pageCount -ȡ����ҳ��
    InitComment(0);//��ʼ����������
    $(pageDiv).pagination(pageCount, {
        callback: pageselectCallback,
        prev_text: "? ��һҳ",
        next_text: "��һҳ ?",
        items_per_page:pageSize,
        num_display_entries:3,
        current_page:0,
        num_edge_entries:5,
        link_to:"javascript:;"
    });

    //��ҳ����¼�
    function pageselectCallback(page_id, jq) {
        InitComment(page_id);
    }
    //������������
    function InitComment(page_id) {
        page_id++;
        $.ajax({
            type: "POST",
            dataType: "json",
            url: sendUrl + "&page_size=" + pageSize + "&page_index=" + page_id,
            beforeSend: function (XMLHttpRequest) {
                $(listDiv).html('<p style="line-height:35px;">���ں�Ŭ�����أ����Ժ�...</p>');
            },
            success: function(data) {
                var strHtml = '';
                for(var i in data){
                    strHtml += '<li>' +
                    '<div class="avatar">';
                    if (typeof (data[i].avatar) != "undefined" && data[i].avatar.length > 0) {
                        strHtml += '<img src="' + data[i].avatar + '" />';
                    }else{
                        strHtml += '<img src="' + defaultAvatar + '" />';
                    }
                    strHtml += '</div>' +
                    '<div class="inner">' +
                    '<p>' + unescape(data[i].content) + '</p>' +
                    '<div class="meta">' +
                    '<span class="blue">' + data[i].user_name + '</span>\n' +
                    '<span class="time">' + data[i].add_time + '</span>' +
                    '</div>' +
                    '</div>';
                    if(data[i].is_reply == 1){
                        strHtml += '<div class="answer">' +
                        '<div class="meta">' +
                        '<span class="right time">' + data[i].reply_time + '</span>' +
                        '<span class="blue">����Ա�ظ���</span>' +
                        '</div>' +
                        '<p>' + unescape(data[i].reply_content) + '</p>' +
                        '</div>';
                    }
                    strHtml += '</li>';
                }
                $(listDiv).html(strHtml);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $(listDiv).html('<p style="line-height:35px;text-align:center;border:1px solid #f7f7f7;">�������ۣ�������ɳ���ɣ�</p>');
            }
        });
    }
}

//��ʼ����Ƶ�����������ckplayer.jsʹ��
function initCKPlayer(boxId, videoSrc, playerSrc){
    var flashvars={
        f:videoSrc,
        c:0,
        loaded:'loadedHandler'
    };
    var video=[videoSrc];
    CKobject.embed(playerSrc,boxId,'video_v1','100%','100%',false,flashvars,video);
}
//��ȡ��������
function ajaxComment(obj,webpath,id)
{
    $.get(webpath + "tools/submit_ajax.ashx?action=view_comment_count&id="+id, function (data) {
        $(obj).text(data);
    }, "html");
}
//��ȡ�������
function ajaxView(obj,webpath,id)
{
    $.get(webpath + "tools/submit_ajax.ashx?action=view_article_click&click=1&id="+id, function (data) {
        $(obj).text(data);
    }, "html");
}
//��������
function ajaxEash(obj,webpath,num)
{
    var $this,url,i = 0;
    if(num==1){
        url = webpath + "tools/submit_ajax.ashx?action=view_article_click&id=";
    }else{
        url = webpath + "tools/submit_ajax.ashx?action=view_comment_count&id=";
    }
    $(obj).each(function(index) {
        $this = $(this);
        $.get(url+$this.attr("i"), function (data) {
            $(obj).find("em").eq(index).html(data);
        }, "html");
    });
}