var TcgLogin={authurl:"https://secure.travelchinaguide.com/member/account/ajax/",htmlGuest:'<span id="customer-LoginBox" class="topLoginBox"><a href="javascript:TcgLogin.showLoginBox()" class="usershow guest">Log In</a></span>',mobileGuest:'<a href="javascript:;" class="mUserbarBoxIcon"></a>',handle:null,rsNum:180,user:{"isLogin":false},init:function(){var hobj=$("#header-top-link");if(hobj.length==0){return;}
TcgLogin.dynamicLoadCss("https://data.travelchinaguide.com/css/min/tcglogin.css",function(){if(hobj.find("#customer-LoginBox").length==0){hobj.prepend(TcgLogin.htmlGuest+'<span class="header-top-split"></span>');}
TcgLogin.initMobileLogin();TcgLogin.checkLogin(TcgLogin.setLoginInfo);});},initMobileLogin:function(){var hobj=$(".header-top-2019-right");if(hobj.length==0){return;}
if(hobj.find(".mUserbarBoxIcon").length==0){hobj.prepend(TcgLogin.mobileGuest);}
$(".mUserbarBoxIcon").click(function(){if(!$(this).hasClass("loginm")){TcgLogin.showLoginBox();return;}
var obj=$(".mUserMenu");if(obj.is(":visible")){obj.hide();util.maskClose();}else{util.maskOpen();obj.show();$(".g_overlay").click(function(){$(".mUserbarBoxIcon").click();});}});},dynamicLoadCss:function(url,f){var head=document.getElementsByTagName('head')[0];var link=document.createElement('link');link.type='text/css';link.rel='stylesheet';link.href=url;if(!!f){link.onload=function(){f();};}
head.appendChild(link);},showLoginBox:function(callback){var ret='';ret+='<div class="popCustomer" id="popLogin">';ret+='<div class="close"></div>';ret+='<div class="popForm">';ret+='<div class="tabCLogin">';ret+='<form method="post">';ret+='<div class="popTitle">Log In</div>';ret+='<div class="flrow"><input type="text" name="n" placeholder="Email" title="Email"></div>';ret+='<div class="flrow"><input type="password" name="p" placeholder="Password" title="Password"></div>';ret+='<div class="flrow"><input type="submit" id="btnCustomerLogin" class="popBtn" value="Log In"></div>';ret+='<div class="flrow alertMsg"></div>';ret+='<div class="flrow"><a href="javascript:void(0);" class="lostPwd">Lost Your Password?</a></div>';ret+='<div class="flrow"><div class="septline"></div></div>';ret+='<div class="flrow">Don\'t have a free account yet? <a id="btnCreateAcc" href="javascript:;">Register>></a></div>';ret+='</form>';ret+='</div>';ret+='<div class="tabCSignup">';ret+='<form method="post">';ret+='<div class="popTitle">Sign Up</div>';ret+='<div class="flrow"><input type="text" name="n" placeholder="Email" title="Email"></div>';ret+='<div class="flrow"><input type="password" name="p" placeholder="Password(6 - 16 characters)" title="Password(6 - 16 characters)"></div>';ret+='<div class="flrow"><input type="submit" id="btnRegister" class="popBtn" value="Register"></div>';ret+='<div class="flrow">I have an account? <a href="javascript:void(0);" class="reLogin">Login</a></div>';ret+='<div class="flrow alertMsg"></div>';ret+='</form>';ret+='</div>';ret+='<div class="tabCInfo">';ret+='<div class="flrow info"><div id="idCMsg"></div></div>';ret+='</div>';ret+='<div class="tabCFindpwd">';ret+='<form method="post">';ret+='<div class="popTitle">Find Password</div>';ret+='<div class="flrow"><input type="text" name="n" placeholder="Email" title="Email"></div>';ret+='<div class="flrow"><input type="submit" id="btnFindpwd" class="popBtn" value="Submit"></div>';ret+='<div class="flrow">I have an account? <a href="javascript:void(0);" class="reLogin">Login</a></div>';ret+='<div class="flrow alertMsg"></div>';ret+='</form>';ret+='</div>';ret+='</div>';ret+='</div>';if($("#popLogin").length==0){$(document.body).append(ret);if(!('placeholder'in document.createElement('input'))){$(".popCustomer input[placeholder]").addClass("img").focus(function(){$(this).removeClass("img");}).blur(function(){if($(this).val().length>0){$(this).removeClass("img");}else{$(this).addClass("img");}});}
$(":text,:password",$(".popCustomer")).focus(function(){$(this).removeClass("alert");});$(".popCustomer .close").click(function(){TcgLogin.hideLoginBox();});$(".lostPwd").click(function(){$(".tabCFindpwd").show().siblings().hide();});$("#btnCreateAcc").click(function(){$(".tabCSignup").show().siblings().hide();});$(".reLogin").click(function(){$(".tabCLogin").show().siblings().hide();});var isNotEmail=function(strEmail){if(strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)==-1)return true;return false;};$(".tabCLogin form").submit(function(){var nobj=$("input[name=n]",this);var pobj=$("input[name=p]",this);var nval=$.trim(nobj.val());var pval=$.trim(pobj.val());if(isNotEmail(nval)){TcgLogin.showAlert("Please enter your email.",nobj);nobj.focus();nobj.select();return false;}
if(pval.length==0){TcgLogin.showAlert("Please enter your password.",pobj);pobj.focus()
return false;}
var rme=$("input[name=remember]:checked",this).length;TcgLogin.login(nval,pval,rme);return false;});$(".tabCSignup form").submit(function(){var nobj=$("input[name=n]",this);var pobj=$("input[name=p]",this);var nval=$.trim(nobj.val());var pval=$.trim(pobj.val());if(isNotEmail(nval)){TcgLogin.showAlert("Please enter your email.",nobj);nobj.focus();nobj.select();return false;}
if(pval.length==0){TcgLogin.showAlert("Please enter your password.",pobj);pobj.focus();return false;}
if(pval.length<6||pval.length>16){TcgLogin.showAlert("Your password must be 6-16 characters.",pobj);pobj.focus();return false;}
TcgLogin.signup(nval,pval);return false;});$(".tabCFindpwd form").submit(function(){var nobj=$("input[name=n]",this);var nval=$.trim(nobj.val());if(isNotEmail(nval)){TcgLogin.showAlert("Please enter your email.",nobj);nobj.focus();nobj.select();return false;}
TcgLogin.findpwd(nval);return false;});}
TcgLogin.pub.maskOpen();TcgLogin.pub.setCenter($('#popLogin'));if(typeof callback!='undefined'){window.onCustomerLogin=callback;}},hideLoginBox:function(){$(".popCustomer").hide("fast",function(){$(".popCustomer").remove();TcgLogin.pub.maskClose();});},setLoginInfo:function(o){var lgbox=$("#customer-LoginBox");if(lgbox.length==0)return;if(!TcgLogin.user.isLogin){lgbox.replaceWith(TcgLogin.htmlGuest);}else{var ret='';ret+='<span id="customer-LoginBox" class="topLoginBox">';ret+=' <a href="https://secure.travelchinaguide.com/member/" class="usershow" title="'+TcgLogin.user.userName+'">'+TcgLogin.pub.fmtUserName(TcgLogin.user.userName,25)+'</a>';ret+=' [<a href="javascript:;" onclick="TcgLogin.logout();" class="btnCout">Logout</a>]';ret+=' <div id="dUserMenu">';ret+='  <div class="dumenuBox">';ret+='   <div class="triangle-top"></div>';ret+='   <ul>';ret+='    <li><a href="https://secure.travelchinaguide.com/member/">My Bookings</a></li>';ret+='    <li><a href="https://secure.travelchinaguide.com/member/Browsing/">Browsing Records</a></li>';ret+='    <li><a href="https://secure.travelchinaguide.com/member/Coupons/">Coupons</a></li>';ret+='    <li class="accProfile"><a href="https://secure.travelchinaguide.com/member/MyProfile">Profile</a></li>';ret+='    <li class="accPwd"><a href="https://secure.travelchinaguide.com/member/Account/Password">Password</a></li>';ret+='   </ul>';ret+='  </div>';ret+=' </div>';ret+='</span>';lgbox.replaceWith(ret);$(".usershow,#dUserMenu",$("#customer-LoginBox")).hover(function(){$("#dUserMenu").show();},function(){$("#dUserMenu").hide();});}
TcgLogin.setLoginInfoMobile(o);if(TcgLogin.user.isLogin){if(window.onCustomerLogin)window.onCustomerLogin();}},setLoginInfoMobile:function(o){var lgbox=$(".mUserbarBoxIcon");if(lgbox.length==0)return;if(!TcgLogin.user.isLogin){lgbox.removeClass("loginm");var obj=$(".mUserMenu");if(obj.is(":visible")){obj.hide();util.maskClose();}}else{lgbox.addClass("loginm");if($(".mUserMenu").length==0){var ret='';ret+=' <div class="mUserMenu">';ret+='  <ul>';ret+='   <li><a href="https://secure.travelchinaguide.com/member/">My Bookings</a></li>';ret+='   <li><a href="https://secure.travelchinaguide.com/member/Browsing">Browsing Records</a></li>';ret+='   <li><a href="https://secure.travelchinaguide.com/member/Coupons">Coupons</a></li>';ret+='   <li class="acc"><a href="javascript:;">My Account</a></li>';ret+='   <li class="accProfile"><a href="https://secure.travelchinaguide.com/member/MyProfile">Profile</a></li>';ret+='   <li class="accPwd"><a href="https://secure.travelchinaguide.com/member/Account/Password">Password</a></li>';ret+='   <li class="accLout"><a href="javascript:;" onclick="TcgLogin.logout();">Logout</a></li>';ret+='  </ul>';ret+=' </div>';$("body").append(ret);}}},showAlert:function(s,oinput){var omsg=$(".popForm>div:visible .alertMsg");if(s.length>0){omsg.html(s).show();if(!!oinput){oinput.addClass("alert");}}else{omsg.html(s).hide();$(".popForm .alert").removeClass("alert");}},checkLogin:function(callback){var url=TcgLogin.authurl;var cu=window.location.href;var param={"t":"c","u":cu};TcgLogin.post(url,param,function(data){if(data.errCode!=0)return;TcgLogin.user=data.user;if(callback!=undefined){callback();}});},login:function(username,password,rme){var url=TcgLogin.authurl;var param={"t":"l","n":username,"p":password,"rnd":Math.random(),"rme":(!!rme?1:0)};TcgLogin.showAlert("");TcgLogin.post(url,param,function(data){if(data.errCode!=0){TcgLogin.showAlert(data.errMsg,$("input[name=n]",$(".tabCLogin form")));return;}
TcgLogin.user=data.user;TcgLogin.setLoginInfo();TcgLogin.hideLoginBox();});},signup:function(username,password){var url=TcgLogin.authurl;var param={"t":"r","n":username,"p":password,"rnd":Math.random()};TcgLogin.showAlert("");TcgLogin.post(url,param,function(data){if(data.errCode!=0){TcgLogin.showAlert(data.errMsg,$("input[name=n]",$(".tabCSignup form")));return;}else{TcgLogin.setLoginInfo();$("#idCMsg").html(data.errMsg);$(".tabCInfo").show().siblings().hide();window.setTimeout(function(){TcgLogin.hideLoginBox();},5000);}});},findpwd:function(username){var url=TcgLogin.authurl;var param={"t":"f","n":username,"rnd":Math.random()};TcgLogin.showAlert("");$.post(url,param,function(data){if(data.errCode!=0){TcgLogin.showAlert(data.errMsg,$("input[name=n]",$(".tabCFindpwd form")));return;}else{$("#idCMsg").html(data.errMsg);$(".tabCInfo").show().siblings().hide();window.setTimeout(function(){TcgLogin.hideLoginBox();},5000);}});},logout:function(){var url=TcgLogin.authurl;TcgLogin.post(url,{"t":"lo",u:window.location.href},function(data){if(data.errCode!=0){return;}
TcgLogin.user=data.user;TcgLogin.setLoginInfo();if(window.onCustomerLogout)window.onCustomerLogout();if(data.url.length>0){top.location=data.url;}});},pub:{maskOpen:function(){if($('.g_overlay').length>0)return;$(document.body).append('<div class="g_overlay" style="position:absolute;left:0px;top:0px;width:100%;z-index:998;opacity:0.3;background:#000;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>');var wh=$(window).height();var dh=$(document.body).height();$('.g_overlay').css({'height':(wh>dh?wh:dh)+'px'});},maskClose:function(){$('.g_overlay').remove();},getSize:function(){return $(window).width();},setCenter:function(o){if(o.length==0)return;var nw=o.outerWidth(),nh=o.outerHeight();o.css({'top':'50%','left':'50%','margin-left':'-'+(nw/2)+'px','margin-top':'-'+(nh/2)+'px'});},fmtUserName:function(s,n){if(s.length<=n)return s;var ea=s.split('@');var e1=ea[0];var e2=ea[1];var s1=e1,s2=e2;if(e1.length>10){s1=e1.substr(0,4)+'***'+e1.substr(e1.length-3);}
if(e2.length>17){s2=e2.substr(0,4)+'***'+e2.substr(e2.length-4);}
return s1+'@'+s2;}},post:function(rurl,param,funcCallback){$.ajax({url:rurl,type:'post',data:param,xhrFields:{withCredentials:true},success:function(data){if(!!funcCallback){funcCallback(data);}}});}};function TcgLoginInit(){if(typeof $!='undefined'){$(function(){TcgLogin.init();});}else{window.setTimeout(TcgLoginInit,500);}}
TcgLoginInit();