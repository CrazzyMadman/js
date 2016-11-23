function getid(lk){
	return document.getElementById(lk);
}
function getName(name){
	return document.getElementsByTagName(name);
}
function add_listener(obj,typ,fun){//添加监听者
	if (obj.addEventListener) {
		obj.addEventListener(typ,fun,false);
	}else{
		obj.attachEvent('on'+typ,fun); 
	}
}
var intou=document.getElementById('intou')
var head_a=intou.getElementsByTagName('a');
for (var i = 0; i < head_a.length; i++) {
	head_a[i].style.color='#6C6C6C';
	head_a[i].onmouseover=function(){
		this.style.color='#FF8800';
		this.style.textDecoration='underline';
		if (this.id=='my_lv') {
			this.style.textDecoration='none';
		}
		if (this.id=='head_wxx') {
			this.style.textDecoration='none';
		}
	}
	head_a[i].onmouseout=function(){
		this.style.color='#6C6C6C';
		this.style.textDecoration='none';
	}
}
var s=true;
getid('cityList').onclick=function(ev){
	var even=ev||window.event;
	if (even.stopPropagation) {
		even.stopPropagation();
	}else{
		even.cancelBubble;
	}
	if (s) {
		getid('head_cityList').style.display="block";
		getid('head_city').style.background='white';
		getid('head_city').style.borderLeft='1px solid #CCCCCC';
		getid('head_city').style.borderRight='1px solid #CCCCCC';
		getid('icon_city').style.backgroundPosition='-18px -70px';
		s=!s;
	}else{
		getid('head_cityList').style.display="none";
		s=!s;
		getid('head_city').style.background='';
		getid('head_city').style.borderLeft='1px solid #FAFAFA';
		getid('head_city').style.borderRight='1px solid #FAFAFA';
		getid('icon_city').style.backgroundPosition='0px -70px';
	}
}
getid('head_cityList').onclick=function(ev){
	var even=ev||window.event;
	if (even.stopPropagation) {
		even.stopPropagation();
	}else{
		even.cancelBubble;
	}
}
document.onclick=function(){
		head_cityList.style.display="none";
		s=true;
		getid('head_city').style.background='';
		getid('head_city').style.borderLeft='1px solid #FAFAFA';
		getid('head_city').style.borderRight='1px solid #FAFAFA';
		getid('icon_city').style.backgroundPosition='0px -70px';
}
var cityList_a=head_cityList.getElementsByTagName('a');
for (var i = 0; i < cityList_a.length; i++) {
	cityList_a[i].onclick=function(){
		getid('lv_city').innerHTML=this.innerHTML;
	}
}
getid('head_mylv').onmouseover=function(){
 	getid('my_lvList').style.display='block';
 	this.style.background='white';
 	this.style.borderLeft='1px solid #CCCCCC';
 	this.style.borderRight='1px solid #CCCCCC';
 	getid('head_san').innerHTML="▲";
 	getid('head_mylv').onmouseout=function(){
 		getid('my_lvList').style.display='none';
 		this.style.background='';
 		this.style.borderLeft='1px solid #FAFAFA';
 		this.style.borderRight='1px solid #FAFAFA';
 		getid('head_san').innerHTML="▼";
 }
}
getid('head_phonecall').onmouseover=function(){
	getid('head_phonebg').style.display='block';
	this.style.background='white';
	getid('head_phone').style.borderRight='1px solid #CCCCCC';
	getid('head_phone').style.borderLeft='1px solid #CCCCCC';
	getid('head_phonesan').innerHTML="▲";
	getid('head_phonecall').onmouseout=function(){
		getid('head_phonebg').style.display='none';
		this.style.background='';
		getid('head_phone').style.borderRight='1px solid #FAFAFA';
		getid('head_phone').style.borderLeft='1px solid #FAFAFA';
		getid('head_phonesan').innerHTML="▼";
	}
}
getid('head_wx').onmouseover=function(){
	getid('head_wxbg').style.display='block';
	getid('head_wxcon').style.borderRight='1px solid #CCCCCC';
	getid('head_wxcon').style.borderLeft='1px solid #CCCCCC';
	getid('head_wxcon').style.backgroundColor='white';
	getid('head_wx').onmouseout=function(){
		getid('head_wxbg').style.display='none';
		getid('head_wxcon').style.borderRight='1px solid #FAFAFA';
		getid('head_wxcon').style.borderLeft='1px solid #FAFAFA';
		getid('head_wxcon').style.backgroundColor='';
	}	
}
getid('head_wxcon').onmouseover=function(){
	getid('head_wxicon').style.backgroundPosition='-20px -90px';
	getid('head_wxx').style.color='#FF8800';
	getid('head_wxcon').onmouseout=function(){
		getid('head_wxicon').style.backgroundPosition='0px -90px';
		getid('head_wxx').style.color='#6C6C6C';
	}
}
getid('head_wb').onmouseover=function(){
	getid('head_wbicon').style.backgroundPosition='-20px -110px';
	getid('head_wbb').style.color='#FF8800';
	getid('head_wbb').style.textDecoration='underline';
	getid('head_wb').onmouseout=function(){
		getid('head_wbicon').style.backgroundPosition='0px -110px';
		getid('head_wbb').style.color='#6C6C6C';
		getid('head_wbb').style.textDecoration='none';
	}
}
// 头部第一行
function dt_gd(imgs,lis,num,n,tim1,tim2,s){//大图封装参数图片，按钮，变量num=null和n=0,计时器tim1=null,tim2=null，布尔值s=true
 	function dt_qido(){
 		n++;
 		if (n>imgs.length-1) {
 			n=0;
 		}
 		dt_changeop();
 		dt_changebg();
 	}
 	tim1=setInterval(dt_qido,4000);
 	function dt_changeop(){
 		if (s) {
 			s=!s;
	 		imgs[n].style.zIndex=2;
	 		imgs[n].style.opacity=0;
	 		var opc=0;
	 		tim2=setInterval(function(){
	 			opc+=0.05;
	 			if (opc>1) {
	 				clearInterval(tim2);
	 				for (var i = 0; i < imgs.length; i++) {
			 			imgs[i].style.opacity=0;
			 			imgs[i].style.zIndex=0;
			 		}
			 		imgs[n].style.zIndex=1;
			 		imgs[n].style.opacity=1;
	 				s=!s;
	 			}
	 			imgs[n].style.opacity=opc;
	 		},20)
 		}
 	}
 	function dt_changebg(){
 		for (var i = 0; i < lis.length; i++) {
 			lis[i].className='dt_but';
 		}
 		lis[n].className='dtbut_color';
 	}
 	for (var i = 0; i < lis.length; i++) {
 		lis[i].a=i;
 		lis[i].onmouseover=function(){
 			num=this.a;
 			if (this.className=='dtbut_color') {
 				clearInterval(tim1);
 				return false;
 			}
 			if (s) {
	 			clearInterval(tim1);
	 			n=num;
	 			dt_changebg();
	 			dt_changeop();

	 			this.onmouseout=function(){
	 				clearInterval(tim1);
		 			tim1=setInterval(dt_qido,4000);
		 		}
 			}else{
 				setTimeout(function(){
	 				if (s&&imgs[num].style.opacity<='0') {
 						n=num;
 						dt_changebg();
	 					dt_changeop();
	 				}
	 			},450)
 			}
 		}
 		imgs[i].onmouseover=function(){
 			clearInterval(tim1);
 			this.onmouseout=function(){
 				tim1=setInterval(dt_qido,4000);
 			}
 		}
 	}
}
function h_dtgd(){
	var h_dtimg=getid('head_dt').getElementsByTagName('img');
	var h_dtbut=getid('head_dtbut').getElementsByTagName('li');
	var h_dtnum=null;
	var h_n=0;
	var h_tim1=null;
	var h_tim2=null;
	var h_s=true;
	dt_gd(h_dtimg,h_dtbut,h_dtnum,h_n,h_tim1,h_tim2,h_s);
}
h_dtgd();
// 头部大图滚动调用封装
function b_dtgd(){
	var b_dtimg=getid('body_dtimglist').getElementsByTagName('a');
	var b_dtbut=getid('body_dtbut').getElementsByTagName('li');
	var b_dtnum=null;
	var b_n=0;
	var b_tim1=null;
	var b_tim2=null;
	var b_s=true;
	dt_gd(b_dtimg,b_dtbut,b_dtnum,b_n,b_tim1,b_tim2,b_s);
}
b_dtgd();
// 主体大图滚动调用封装
// 大图tb切换列表
function dt_tb_change(){
	var li_op=getid('dt_tbop').getElementsByTagName('li');
	var li_text=getid('dt_tbtext').getElementsByTagName('li');
	var dt_tb_cons=[getid('tb_zyx'),getid('tb_gty'),getid('tb_ddy'),getid('tb_jd'),getid('tb_dj'),getid('tb_jp'),getid('tb_hcp'),getid('tb_yl')];
	for (var i = 0; i < dt_tb_cons.length; i++) {
		dt_tb_cons[i].style.display='none';
	}
	dt_tb_cons[0].style.display='block';
	li_text[0].style.color='#333333';
	li_text[0].style.background='white';
	li_text[0].style.borderBottom='1px solid white';
	li_op[0].style.borderLeftColor='#DD3377';
	li_op[0].style.opacity=1;
	for (var i = 0; i < li_text.length; i++) {
		li_text[i].a=i;
		li_text[i].onmouseover=function(){
			if (this.style.background=='white') {
				return false;
			}
			this.style.color='#DD3377';
			li_op[this.a].style.opacity=0.7;
			this.onmouseout=function(){
				if (this.style.background=='white') {
					return false;
				}
				this.style.color='white';
				li_op[this.a].style.opacity=0.4;
			}
		}
		li_text[i].onclick=function(){
			for (var i = 0; i < li_text.length; i++) {
				li_text[i].style.color='white';
				li_text[i].style.background='';
				li_text[i].style.borderBottom='1px dashed';
				li_text[i].style.borderBottomColor='#ADABAB';
				li_op[i].style.opacity=0.4;
				li_op[i].style.borderLeftColor='#5C5C5C';
				dt_tb_cons[i].style.display='none';
			}
			this.style.color='#333333';
			this.style.background='white';
			this.style.borderBottom='1px solid white';
			li_op[this.a].style.borderLeftColor='#DD3377';
			li_op[this.a].style.opacity=1;
			dt_tb_cons[this.a].style.display='block';
			if (this.a>0) {
				li_text[this.a-1].style.borderBottomColor='transparent';
			}
		}
	}
}
dt_tb_change();
// 大图tb切换列表
// //自由行酒店机票tb切换
function zyx_tb_change(){
	var zyx_lis=getid('zyx_menu').getElementsByTagName('li');
	var zyx_is=getid('zyx_menu').getElementsByTagName('i');
	var zyx_lls=getid('zyx_tb_con').getElementsByTagName('li');
	zyx_lis[0].style.color='#DD3377';
	zyx_lis[0].style.borderBottomColor='#DD3377';
	zyx_is[0].style.display='block';
	for (var i = 0; i < zyx_lis.length; i++) {
		zyx_lis[i].a=i;
		zyx_lis[i].onmouseover=function(){
			if (zyx_is[this.a].style.display=='block') {
				return false;
			}
			this.style.color='#DD3377';
			this.onmouseout=function(){
				if (zyx_is[this.a].style.display=='block') {
					return false;
				}
				this.style.color='#333333';
			}
		}
		zyx_lis[i].onclick=function(){
			for (var i = 0; i < zyx_lis.length; i++) {
				zyx_lis[i].style.color='#333333';
				zyx_lis[i].style.borderBottomColor='transparent';
				zyx_is[i].style.display='none';
				zyx_lls[i].style.display='none';
			}
			this.style.color='#DD3377';
			this.style.borderBottomColor='#DD3377';
			zyx_is[this.a].style.display='block';
			zyx_lls[this.a].style.display='block';
		}
	}
}
zyx_tb_change();
//自由行酒店机票tb切换
function search(obj,but,searchword){//搜索栏封装参数搜索栏标签名按钮初始搜索文字
	var s=true;
	var get_value=null;
	obj.onfocus=function(){
		this.style.boxShadow='0px 0px 2px #048CFD';
		if (s) {
			this.value='';
			this.style.color='#333333';
			this.style.borderColor='#CCCCCC';
			this.style.background='white';
			s=!s;
		}
		obj.onblur=function(){
			this.style.boxShadow='';
			if (this.value=='') {
				this.value=searchword;
				this.style.color='#BBBBBB';
				s=!s;
			}
		}
	}
	but.onclick=function(){
		if (s) {
			obj.style.borderColor='#EE3388';
			obj.style.background='#FEF2F9';
			obj.style.color='#333333';
		}
	}
}
//搜索栏封装
search(getid('zyx_jd_sch'),getid('zyx_jd_but'),'请输入目的地、主题、或关键词');//自由行酒店调用搜索栏封装
function search_start_city(start,start_city,start_icon,start_citylist){//搜索栏出发地列表封装开始标签，开始城市文本，开始城市小标，开始城市列表标签
	var s=true;
	var a=start_citylist.getElementsByTagName('a');
	start.onclick=function(ev){
		var even=ev||window.event;
		if (even.stopPropagation) {
			even.stopPropagation();
		}else{
			even.cancelBubble;
		}
		if (s) {
			s=!s;
			start_citylist.style.display='block';
			start_icon.style.backgroundPosition='-355px -4px';
			for (var i = 0; i < a.length; i++) {
				a[i].x=i;
				a[i].onclick=function(){
					s=!s;
					start_city.innerHTML=this.innerHTML;
					start_citylist.style.display='none';
					start_icon.style.backgroundPosition='-355px 0px';
				}
			}
		}else{
			s=!s;
			start_citylist.style.display='none';
			start_icon.style.backgroundPosition='-355px 0px';
		}
	}
	function document_onclick(){
		if (s==false) {
			s=!s;
			start_citylist.style.display='none';
			start_icon.style.backgroundPosition='-355px 0px';
		}
	}
	add_listener(document,'click',document_onclick);
	start_citylist.onclick=function(ev){
		var even=ev||window.event;
		if (even.stopPropagation) {
			even.stopPropagation();
		}else{
			even.cancelBubble;
		}
	}
}
search_start_city(getid('zyx_jp_start'),getid('jp_start_city'),getid('jp_start_icon'),getid('jp_start_citylist'));//自由行机票出发地列表调用搜索栏出发地列表封装
search(getid('zyx_jp_stop'),getid('zyx_jp_but'),'请输入目的地、主题、或关键词');//自由行机票调用搜索封装
search_start_city(getid('gty_search_start'),getid('gty_start_city'),getid('gty_start_icon'),getid('gty_start_citylist'));//跟团游出发地列表调用搜索栏出发地列表封装
search(getid('gty_search_stop'),getid('gty_search_but'),'请输入目的地、主题、或关键词');//跟团游调用搜索封装
search(getid('ddy_search'),getid('ddy_search_but'),'请输入目的地、主题、或关键词');//当地游调用搜索封装
search(getid('jdmp_search'),getid('jdmp_search_but'),"请输入目的地、主题、或关键词")//景点门票调用搜索封装
search(getid('yl_search'),getid('yl_search_but'),'请输入邮轮公司、邮轮航线或出发港口');//邮轮调用搜索封装
function discount_tb_change(){//打折部分的tb切换
	var lis=getid('discount_tbchange_title').getElementsByTagName('li');
	var icons=getid('discount_tbchange_title').getElementsByTagName('span');
	var lls=getid('discount_tbchange_content').getElementsByTagName('li');
	lis[0].style.borderBottom='2px solid #1B9ECF';
	lis[0].style.color='#1B9ECF';
	icons[0].style.display='block';
	lls[0].style.display='block';
	for (var i = 0; i < lis.length; i++) {
		lis[i].x=i;
		lis[i].onclick=function(){
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.borderBottom='';
				lis[i].style.color='#666666';
				icons[i].style.display='none';
				lls[i].style.display='none';
			}
			this.style.borderBottom='2px solid #1B9ECF';
			this.style.color='#1B9ECF';
			icons[this.x].style.display='block';
			lls[this.x].style.display='block';
		}
	}
}
discount_tb_change();//tb切换调用
function huadong(obj){     //介绍栏向上滑动封装滑动块的标签为div margin_top统一
	var divs=obj.getElementsByTagName('div');
	var tim=[];
	var m=[];
	var n=[];
	for (var i = 0; i < divs.length; i++) {
		tim[i]=null;
		m[i]=10;
		n[i]=0;
		divs[i].x=i;
		divs[i].onmouseover=function(){
			var num=this.x;
			clearInterval(tim[num]);
			tim[num]=setInterval(function(){
				m[num]-=0.08;
				n[num]+=0.08;
				if (m[num]<=5) {
					clearInterval(tim[num]);
					m[num]=5;
					n[num]=5;
				}
				divs[num].style.marginTop=m[num]+'px';
				divs[num].style.marginBottom=n[num]+'px';
			},1)
			this.onmouseout=function(){
				clearInterval(tim[num]);
				tim[num]=setInterval(function(){
				m[num]+=0.08;
				n[num]-=0.08;
				if (m[num]>=10) {
					clearInterval(tim[num]);
					m[num]=10;
					n[num]=0;
				}
				divs[num].style.marginTop=m[num]+'px';
				divs[num].style.marginBottom=n[num]+'px';
			},1)
			}
		}
	}
}
huadong(getid('discount_tbchange_content')); //打折调用介绍栏向上滑动封装滑动块的标签为div