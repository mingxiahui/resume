var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');
require('./common/libs/zepto-modules/touch');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');
var myScroll;
// edit index
$(".swiper-container").show();
$("#mainContainer").hide();

var swiper = new Swiper('.swiper-container',{
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAni.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
});
if (localStorage.name) {
	$(".swiper-container").hide();
	$("#mainContainer").show();
	$.post('http://localhost:8000/myskill',function(data){
		var str="";
		str+="<dl>";
		var kframes="";
		kframes+="<dt>了解的规范</dt>";
		for (var i = 0; i < data.kframe.length; i++) {
			kframes+="<dd>"+data.kframe[i]+"</dd>"
		}

		var sframes="";
		sframes+="<dt>熟悉的框架</dt>";
		for (var i = 0; i < data.sframe.length; i++) {
			sframes+="<dd>"+data.sframe[i]+"</dd>"
		}

		var librariess="";
		librariess+="<dt>熟悉的类库</dt>";
		for (var i = 0; i < data.libraries.length; i++) {
			librariess+="<dd>"+data.libraries[i]+"</dd>"
		}

		var pluggables="";
		pluggables+="<dt>熟悉的插件</dt>";
		for (var i = 0; i < data.pluggable.length; i++) {
			pluggables+="<dd>"+data.pluggable[i]+"</dd>"
		}

		var arrangements="";
		arrangements+="<dt>精通的布局</dt>";
		for (var i = 0; i < data.arrangement.length; i++) {
			arrangements+="<dd>"+data.arrangement[i]+"</dd>"
		}

		var programs="";
		programs+="<dt>精通的程序</dt>";
		for (var i = 0; i < data.program.length; i++) {
			programs+="<dd>"+data.program[i]+"</dd>"
		}
		str+=kframes+sframes+librariess+pluggables+arrangements+programs;
		str+="</dl>";
		$('#scroller').html(str);

		myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})
}else{
	$(".swiper-container").show();
	$("#mainContainer").hide();	
}
//进入界面
$("#enter").tap(function(){
	$(".swiper-container").hide();
	$("#mainContainer").show();
	localStorage.name="xiahui"
	$.post('http://localhost:8000/myskill',function(data){
		var str="";
		str+="<dl>";
		var kframes="";
		kframes+="<dt>了解的规范</dt>";
		for (var i = 0; i < data.kframe.length; i++) {
			kframes+="<dd>"+data.kframe[i]+"</dd>"
		}

		var sframes="";
		sframes+="<dt>熟悉的框架</dt>";
		for (var i = 0; i < data.sframe.length; i++) {
			sframes+="<dd>"+data.sframe[i]+"</dd>"
		}

		var librariess="";
		librariess+="<dt>熟悉的类库</dt>";
		for (var i = 0; i < data.libraries.length; i++) {
			librariess+="<dd>"+data.libraries[i]+"</dd>"
		}

		var pluggables="";
		pluggables+="<dt>熟悉的插件</dt>";
		for (var i = 0; i < data.pluggable.length; i++) {
			pluggables+="<dd>"+data.pluggable[i]+"</dd>"
		}

		var arrangements="";
		arrangements+="<dt>精通的布局</dt>";
		for (var i = 0; i < data.arrangement.length; i++) {
			arrangements+="<dd>"+data.arrangement[i]+"</dd>"
		}

		var programs="";
		programs+="<dt>精通的程序</dt>";
		for (var i = 0; i < data.program.length; i++) {
			programs+="<dd>"+data.program[i]+"</dd>"
		}
		str+=kframes+sframes+librariess+pluggables+arrangements+programs;
		str+="</dl>";
		$('#scroller').html(str);

		myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})		
})



$('#footer li').tap(function(){
	$('#footer li').eq($(this).index()).addClass('active').siblings('li').removeClass('active');
	
	
})

//音乐开关
var bstop=true;
	$('#music').singleTap(function(){
		if (bstop) {
			$('audio')[0].pause();
			$('#music').css('animation','0')
			bstop=false;
		}else{
			$('audio')[0].play();
			$('#music').css('animation','musice 1s infinite both')
			bstop=true;
		}
	})

//开关切换
$('.btntwo').tap(function(){
	$.post('http://localhost:8000/project',function(data){
		        var str1="";
		        str1+='<div class="items">'
		        str1+='<div class="items-first">'
		        str1+='<img src=img/xiang1.png>'		
				str1+='<p>category:'+data[0].name+'</p>';
                str1+='<p>url:'+data[0].url+'</p>';
                str1+='<p>description:'+data[0].description+'</p>';
                str1+='<p>detail:'+data[0].detail+'</p>';
                str1+='<p>tech:'+data[0].tech+'</p>';
                str1+='</div>'
				str1+='<div class="items-second">'
				str1+='<img src=img/xiang2.jpg>'		
				str1+='<p>category:'+data[1].name+'</p>';
                str1+='<p>description:'+data[1].description+'</p>';
                str1+='<p>detail:'+data[1].detail+'</p>';
                str1+='<p>tech:'+data[1].tech+'</p>';
                str1+='</div>'
				 str1+='<div class="items-three">'
				 str1+='<img src=img/xiang3.jpg>'		
				str1+='<p>category:'+data[2].name+'</p>';
                str1+='<p>description:'+data[2].description+'</p>';
                str1+='<p>detail:'+data[2].detail+'</p>';
                str1+='<p>tech:'+data[2].tech+'</p>';
                str1+='</div>'
				 str1+='<div class="items-four">'
				 str1+='<img src=img/xiang4.jpg>'		
				str1+='<p>category:'+data[3].name+'</p>';
                str1+='<p>description:'+data[3].description+'</p>';
                str1+='<p>detail:'+data[3].detail+'</p>';
                str1+='<p>tech:'+data[3].tech+'</p>';
                str1+='</div>'
                str1+='</div>'
				$('#scroller').html(str1);
				myScroll.scrollTo(0,0);
				myScroll.refresh();
	})
})

$('.btnone').tap(function(){
	$.post('http://localhost:8000/myskill',function(data){
		var str="";
		str+="<dl>"
		var kframes="";
		kframes+="<dt>了解的规范</dt>";
		for (var i = 0; i < data.kframe.length; i++) {
			kframes+="<dd>"+data.kframe[i]+"</dd>"
		}

		var sframes="";
		sframes+="<dt>熟悉的框架</dt>";
		for (var i = 0; i < data.sframe.length; i++) {
			sframes+="<dd>"+data.sframe[i]+"</dd>"
		}

		var librariess="";
		librariess+="<dt>熟悉的类库</dt>";
		for (var i = 0; i < data.libraries.length; i++) {
			librariess+="<dd>"+data.libraries[i]+"</dd>"
		}

		var pluggables="";
		pluggables+="<dt>熟悉的插件</dt>";
		for (var i = 0; i < data.pluggable.length; i++) {
			pluggables+="<dd>"+data.pluggable[i]+"</dd>"
		}

		var arrangements="";
		arrangements+="<dt>精通的布局</dt>";
		for (var i = 0; i < data.arrangement.length; i++) {
			arrangements+="<dd>"+data.arrangement[i]+"</dd>"
		}

		var programs="";
		programs+="<dt>精通的程序</dt>";
		for (var i = 0; i < data.program.length; i++) {
			programs+="<dd>"+data.program[i]+"</dd>"
		}
		str+=kframes+sframes+librariess+pluggables+arrangements+programs;
		str+="</dl>"
		$('#scroller').html(str);
		myScroll.scrollTo(0,0);
		myScroll.refresh();
		
	})		
})

$('.btnthree').tap(function(){
	var str2="";
	str2+='<div class="live"><div class="livef">'
    str2+='<img src="img/jingone.jpg"><p>家乡：德清</p><p>现居地:杭州</p>'
    str2+='<p>大学就读：衢州学院</p><p>专业:电气自动化</p></div>'
    str2+='<div class="lives"><img src="img/jingtwo.jpg"><p>睿眼通（上海）信息科技有限公司</p>'
    str2+='<p>时间：2015年-2016年</p><p>职位：前端开发工程师</p>'
    str2+='<p>项目：ruiyantong.com、zhengjiaotong.com、政教通App等</p></div>'
    str2+='<div class="livet"><img src="img/jingthree.jpg"><p>杭州易网灵杰科技有限公司</p>'
    str2+='<p>时间：2016年-至今</p><p>职位：前端开发工程师</p>'
    str2+='<p>项目：商企通视讯服务平台</p></div></div>'
    $('#scroller').html(str2);
    myScroll.scrollTo(0,0);
	myScroll.refresh();
})

$('.btnfour').tap(function(){
	var str3="";
	str3+='<div class="myself"><img src=img/me.jpg><div class="relations"><p>联系我</p>'
    str3+='<p>手机：15268271197</p><p>QQ：362883546</p></div>'
    str3+='<div class="likes">我性格开朗、积极上进;具有良好的团队精神和人际关系，对待工作认真负责、勤恳耐劳，耐心细心,敢于开拓创新，有着强烈的事业心与责任感，对人生和事业充满热情和憧憬。'
    str3+='</div><div class="sao"><img src="img/myerwei.jpg" alt=""></div></div>'
    $('#scroller').html(str3);
    myScroll.scrollTo(0,0);
	myScroll.refresh();
})