/**
* Created by Administrator on 2016/12/27.
*/
var num = 0;

$("li img").load(function(){
    num++;
    if(num==4){
        $("#sd_banner").show();
    }
}).click(function(){

//����Ѿ�����active״̬��return
    if (this.className.indexOf("active")!=-1)
        return;

//active״̬��ͼƬ�ָ�ԭ��
    $("li img.active").fadeTo(200,0.6).removeClass("active").animate({top:5,width:52,left:10},300);
//    $("li img.active").removeClass("active");
//��ȡ���
    var i = $(this).attr("pic");
    var t = $(this).attr("text").split("|");

//��ǰ
    $(this).animate({top:-5,width:52,height:35},100).addClass("active").fadeTo(200,1);
//    $(this).addClass("active");
    $("#sd_banner_content").children().addClass("gray").end().fadeTo(500,0.1,
        function(){
            $(this).children("a").children("img").attr("src","images/front_image/slider"+i+".jpg").removeClass("gray");//���ͼƬ
            $(this).children("a").attr("href",t[0]);
            $(this).children("a").attr("target",t[1]);
            $(this).fadeTo(500,1,function(){
                $("#frontText").html(t[0]).fadeIn(200);
                $("#frontTextBack").html(t[0]).fadeIn(200);
                $("#frontTextSub").html(t[1]).fadeIn(200)
            });
        })
});

//��ʼ��һ��ͼƬ
var i =0;

show();

function show(){
    if (i==$("li img").size())
        i = 0
    $("li img").eq(i).click();
    i++;
    setTimeout("show()",10000);
}

if (self.location.search!=""){
    var V = self.location.search;
    V = V.substr(1,V.length);
    eval(V);
    if (option.animate == 0){
        $("#sd_banner ul").hide();
    }
    $("#sd_banner_content img").width($("#sd_banner").width());
    $("#sd_banner_content img").height($("#sd_banner").height());
}