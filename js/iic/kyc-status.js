function switchLang4KycStatus(t){switchLang(t),0==status?$(".kyc-status-title").html($.i18n("go_kyc")):$(".kyc-status-title").html($.i18n("kyc_wait_title"))}function clearMsg(){$("#msg").html(""),$("#msg").hide()}$(document).ready(function(){"https://chain.pro/tpl/iic/login.html?source=wechat"===document.referrer?$("#iic_content").show():$("#iic_content").hide();var t=Cookies.get("token");$("#msg").hide(),$(function(){$("[data-toggle='tooltip']").tooltip()}),new ClipboardJS(".btn").on("success",function(t){$("#msg").html($.i18n("copied")),t.clearSelection(),$("#msg").show(),setTimeout("clearMsg()",2e3)}),$.i18n({locale:"en"}).load({en:"/i18n/en.json",zh:"/i18n/zh.json"}).then(function(){switchLang4KycStatus(2)}),$(".logout").on("click",logout.bind(this)),$(".kyc-status-user").html(Cookies.get("user")),$.ajax({context:this,url:KYC_STATUS_URL,headers:{Authorization:"Bearer "+t}}).done(function(t,e,s){var n="/img/kyc/kyc-";if(t.data){if(1===t.data.kycStatus){n+="1.png",$(".btn-submit").remove();var a='<span style="color: #4393d8;">认证成功(Congratulations! KYC has been passed successfully)</span>';$(".kyc-status-title").html(a)}else if(0===t.data.kycStatus){n+="0.png",$(".btn-submit").remove(),$(".btn-renew").removeClass("hidden");var a='<span style="color: #4393d8;">认证中(KYC is processing)</span>';$(".kyc-status-title").html(a)}else if(2===t.data.kycStatus){n+="2.png",$(".btn-submit").remove(),$(".btn-renew").removeClass("hidden");var a='<span style="color: #e18c10;">认证失败(The ID Card name fail to match your name)</span>';$(".kyc-status-title").html(a)}else if(3===t.data.kycStatus){n+="2.png",$(".btn-submit").remove(),$(".btn-renew").removeClass("hidden");var a='<span style="color: #e18c10;">认证失败(Authentication failed, please check the information you upload and renew it)</span>';$(".kyc-status-title").html(a)}$(".kyc-status-content").css("display","none")}else{n+="2.png";var a="您尚未完成实名认证，请完成实名认证以获得糖果空投";$(".kyc-status-title").html(a)}$(".kyc-status-img").removeClass("hidden"),$(".kyc-status-img").find("img").attr({src:n}),$(".kyc-status-btn").css("display","inline-block")}).fail(function(t,e,s){}),alive(function(t){if(t.success&&t.data){var e=t.data,s="Hi, "+e.nickname+" ",n=e.mobilePhoneNumber.substr(-8);$.ajax({url:"https://candy.mimidao.net/iic/reward?mobile="+n,type:"get",dataType:"json"}).done(function(t){if("success"===t.message){var e=t.result.invite_cnt,s=t.result.reward,n=t.result.register_cnt;$("#iic_content").html("您邀请的总人数为"+e+"，已经登记的人数为"+n+"，获得奖励为"+s+"个IIC")}else $("#iic_content").html("")}),$(".user").empty().html(s),$("#user_code_v").html(e.code)}})});