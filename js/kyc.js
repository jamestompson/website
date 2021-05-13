function switchLang4Kyc(e){switchLang(e),$("input[name=idName]").attr("placeholder",$.i18n("name_different_warning")),$("input[name=idNum]").attr("placeholder",$.i18n("id_number"))}function checkRealName(e){return""===$.trim(e)&&"Error real name"}function checkID(e){return!/\d{3,}/gi.test(e)&&"Error ID card number"}function checkImage(){var e=!0;return $("input[name=fileIdFront]").val()?$("input[name=fileIdFront]").parent().next("div.with-errors").html(""):($("input[name=fileIdFront]").parent().next("div.with-errors").html($.i18n("image_warning3")),e=!1),$("input[name=fileIdBack]").val()?$("input[name=fileIdBack]").parent().next("div.with-errors").html(""):($("input[name=fileIdBack]").parent().next("div.with-errors").html($.i18n("image_warning3")),e=!1),$("input[name=fileInHand]").val()?$("input[name=fileInHand]").parent().next("div.with-errors").html(""):($("input[name=fileInHand]").parent().next("div.with-errors").html($.i18n("image_warning3")),e=!1),e}function checkProtocal(){var e=!0;return $("input[type=checkbox]").is(":checked")?$("input[type=checkbox]").parent().next("div.with-errors").html():($("input[type=checkbox]").parent().next("div.with-errors").html($.i18n("protocol_warning")),e=!1),e}function uploadImage(){var e=$(this)[0].files[0];if(e){if(e.size&&e.size/1e6>10)return void $(this).parent().next(".help-block.with-errors").html($.i18n("image_warning1"));if(e.name&&-1==["jpg","jpeg","png","gif"].indexOf(e.name.split(".").pop().toLowerCase()))return void $(this).parent().next(".help-block.with-errors").html($.i18n("image_warning2"));var t=new FormData;t.append("file",e),$.ajax({context:this,method:"POST",url:KYC_UPLOAD_URL,headers:{Authorization:"Bearer "+getToken()},contentType:!1,processData:!1,data:t,success:function(e){$(this).parent().children(".upload-image").css("background-image","url("+e.data+")"),$(this).parent().children("input[type=text]").val(e.data),$(this).next("upload-image-text").html($.i18n("change_image_title"))},error:function(e,t,a){e.status}})}}function bindEvent(){var e=COUNTRY_MAP.map(function(e){return'<option value="'+e.langKey+","+e.areaCode+'">+'+e.areaCode+"  "+e.value+"</option>"}).join("");$("select").html(e),$("input[name=idName]").on("blur",function(e){var t=$(this),a=checkRealName(t.val());showErr(t,a)}),$("input[name=idNum]").on("blur",function(e){var t=$(this),a=checkID(t.val());showErr(t,a)}),$("input[name=phoneNum]").on("blur",function(e){var t=$(this),a=checkID(t.val());showErr(t,a)}),$(".btn-send-code").on("click",function(e){var t=$(this),a=checkPhone($("input[name=phoneNum]").val());if(a)return void $("input[name=phoneNum]").siblings(".with-errors").text(a);$("input[name=phoneNum]").siblings(".with-errors").text("");var n=t.text();countDown({el:t,duration:60,cb:function(){t.text(n)}});$("input[name=phoneNum]").siblings(".with-errors").text("SMS code has been sended, please check it out...");var i=$("#kyc").serializeJSON();i.mobilePhoneAreaCode=i.nationality.split(",")[1],i.areaCode=i.nationality.split(",")[1],i.langKey=i.nationality.split(",")[0],sendKycSms({url:KYC_PHONE,pram:i})}),$("input[name=activeCode]").on("blur",function(e){var t=$(this),a=checkVerfyCode(t.val());showErr(t,a)}),$("input[name=ethAddress]").on("blur",function(e){var t=$(this),a="";isAddress(t.val())||(a="Please input right eth address"),showErr(t,a)}),$(".btn-submit").on("click",function(e){e.preventDefault();$(this);if(!$("input[data-i18n=protocol_text]").is(":checked"))return $("#popUpModal").find(".modal-body").empty().text("Please check the protocol ( 请勾选协议 ) !"),void $("#popUpModal").modal({show:!0});$.each($("#kyc").find("input"),function(e,t){$(t).trigger("blur")}),$.each($(".uploadImg"),function(e,t){"1"!==$(t).attr("isupload")&&$(t).siblings(".with-errors").text("please upload image...")});var t="";if($.each($("#kyc").find(".with-errors"),function(e,a){""!==$(a).text()&&(t+=$(a).text())}),t)return $("#popUpModal").find(".modal-body").empty().text("please finish user info (请完善用户资料) !"),void $("#popUpModal").modal({show:!0});var a=$("form").serializeJSON();a.mobilePhoneAreaCode=a.nationality.split(",")[1],a.areaCode=a.nationality.split(",")[1],a.langKey=a.nationality.split(",")[0],a.fileIdFront=$("#frontImageContainer").attr("imgUrl"),a.fileIdBack=$("#backImageContainer").attr("imgUrl"),a.fileInHand=$("#holdImageContainer").attr("imgUrl"),$.ajax({method:"post",url:KYC_SUBMIT_URL,headers:{Authorization:"Bearer "+getToken()},data:JSON.stringify(a),contentType:"application/json"}).done(function(e,t,a){if(e.success){var n="The information you submitted has been uploaded successfully, waiting for the staff to review.(您提交的信息已上传成功，等待工作人员审核中) ";$("#popUpModal").find(".modal-body").empty().text(n),$("#popUpModal").modal({show:!0});var i=$(".page-title").text();$(".page-title").html(i+'<span style="color: #4393d8; display: block;">The information you submitted has been uploaded successfully, waiting for the staff to review.(您提交的信息已上传成功，等待工作人员审核中) </span>'),$(".btn-submit").attr("disabled","disabled"),setTimeout(function(){location.href=KYC_STATUS_PAGE},3e3)}else $("#popUpModal").find(".modal-body").empty().text(e.message),$("#popUpModal").modal({show:!0})})})}function getKycStatus(){$.ajax({context:this,method:"get",url:KYC_STATUS_URL,headers:{Authorization:"Bearer "+getToken()},contentType:!1,processData:!1,data:JSON.stringify({}),success:function(e,t,a){if(e.success){var n=e.data;if(!n)return;if(n.idName&&$("input[name=idName]").val(n.idName),n.idNum&&$("input[name=idNum]").val(n.idNum),n.phoneNum&&$("input[name=phoneNum]").val(n.phoneNum),n.nationality&&$("select[name=nationality]").val(n.nationality),n.fileIdFront&&($("#frontImageContainer").attr("isupload","1"),$("#frontImageContainer").find(".upload-image").css({"background-image":"url("+n.fileIdFront+")"})),n.fileIdBack&&($("#backImageContainer").attr("isupload","1"),$("#backImageContainer").find(".upload-image").css({"background-image":"url("+n.fileIdBack+")"})),n.fileInHand&&($("#holdImageContainer").attr("isupload","1"),$("#holdImageContainer").find(".upload-image").css({"background-image":"url("+n.fileInHand+")"})),n.ethAddress&&$("input[name=ethAddress]").val(n.ethAddress),e.data)if(1===e.data.kycStatus){$("input").attr("disabled","disabled"),$(".btn-submit").attr("disabled","disabled");var i=$(".page-title").text(),r='<span style="color: #4393d8; display: block;"> The information you submitted has been uploaded successfully, waiting for the staff to review.(您提交的信息已上传成功，等待工作人员审核中) </span>';$(".page-title").html(i+""+r)}else if(0===e.data.kycStatus){var i=$(".page-title").text(),r='<span style="color: #4393d8; display: block;"> Processing(审核中)... </span>';$(".page-title").html(i+" "+r)}else if(2===e.data.kycStatus){var i=$(".page-title").text(),r='<span style="color: #4393d8; display: block;"> The ID Card name fail to match your name(审核失败)... </span>';$(".page-title").html(i+" "+r)}else if(3===e.data.kycStatus){var i=$(".page-title").text(),r='<span style="color: #4393d8; display: block;"> Authentication fail(审核失败)... </span>';$(".page-title").html(i+" "+r)}}},error:function(e,t,a){}})}var isAddress=function(e){return e=e.toLowerCase(),!!/^(0x)?[0-9a-f]{40}$/i.test(e)&&(!(!/^(0x)?[0-9a-f]{40}$/.test(e)&&!/^(0x)?[0-9A-F]{40}$/.test(e))||void 0)},isChecksumAddress=function(e){e=e.replace("0x","");for(var t=sha3(e.toLowerCase()),a=0;a<40;a++)if(parseInt(t[a],16)>7&&e[a].toUpperCase()!==e[a]||parseInt(t[a],16)<=7&&e[a].toLowerCase()!==e[a])return!1;return!0};$(document).ready(function(){getKycStatus(),bindEvent()});