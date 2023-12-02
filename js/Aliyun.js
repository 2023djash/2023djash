/*************************************

项目名称：阿里云盘 净化/解锁SVIP
使用声明：禁止转载与售卖！

*************************************/


var body = $response.body;
var a99999 = JSON.parse(body);
const url = $request.url;
const tubiao = '/users/me';
const chatiao = '/users/tools';
const vipa = '/users/vip/info';
const vipb = '/users/me/vip/info';
const get = '/user/get';
const bofang = '/users/feature/list';
const adrive = '/user/getUserCapacityInfo';
const hengtiao = '/users/onboard_list';
const guolv = '/users/home/widgets';


//修改我的-昵称旁边图标
if (url.indexOf(tubiao) != -1){
  body = body.replace(/\"membershipIdentity":".*?"/g, '\"membershipIdentity":"svip"').replace(/\"membershipIcon":".*?"/g, '\"membershipIcon":"https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png"').replace(/\"badges":\[.+\]/g, '\"badges":[    {      "code" : "member-shi",      "defaultIcon" : "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png",      "iconText" : null,      "iconTemplate" : null    }]');
}

//去除-我的-插条
if (url.indexOf(chatiao) != -1){
  delete a99999.result.guideInfo;
  body = JSON.stringify(a99999);
}

//购买页面的SVIP
if (url.indexOf(vipa) != -1){
   body = body.replace(/\{.+\}/g, '\{  "status" : "normal",  "identity" : "svip",  "icon" : "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png",  "level" : "8t",  "vipList" : [    {      "code" : "svip.8t",      "promotedAt" : 1691769901,      "expire" : 4092599349,      "name" : "超级会员"    }  ],  "mediumIcon" : "https://gw.alicdn.com/imgextra/i4/O1CN01Mk916Y1c99aVBrgxM_!!6000000003557-2-tps-222-60.png"  }');
}

//我的页面SVIP
if (url.indexOf(vipb) != -1){
 body = body.replace(/\{.+\}/g, '\{  "description" : "1970-10-10",  "titleNotice" : "君子以自强不息",  "activityAction" : "smartdrive://webview?url=https%3A%2F%2Fpages.aliyundrive.com%2Fmobile-page%2Fweb%2Fmembership.html%3FdisableNav%3DYES%26renew%3DYES",  "rightButtonText" : "SVIP",  "activityText" : "🇨🇳",  "identity" : "SVIP",  "backgroundImage" : "https://raw.githubusercontent.com/2023djash/Surge/main/IMG_0492_polarr.jpeg",  "titleImage" : "https://gw.alicdn.com/imgextra/i2/O1CN01snE6rA1pVg95HyRBl_!!6000000005366-2-tps-214-49.png",  "backgroudImage" : null  }');
}

if (url.indexOf(get) != -1){
  body = body.replace(/\"vip_identity":".*?"/g, '\"vip_identity":"svip"');
}

//播放信息
if (url.indexOf(bofang) != -1){
  body = body.replace(/\"name":".*?"/g, '\"name":"svip"').replace(/\"intercept":\w+/g, '\"intercept":false');
}

if (url.indexOf(adrive) != -1){
  a99999.capacity_level_info = {
    "capacity_type" : "normal"
  };
  a99999.user_capacity_limit_details = {
    "limit_download" : false,
    "limit_consume" : false
  };
  body = JSON.stringify(a99999);
}

//净化项目
if ($request.url.indexOf(hengtiao) != -1){
  delete a99999.result;  //横条信息
  body = JSON.stringify(a99999);
}

if ($request.url.indexOf(guolv) != -1){
  a99999.coreFeatures.items = a99999.coreFeatures.items.filter(item => item.code !== "AI_ASSISTANT");  //图搜
  delete a99999.signIn;  //登录
  delete a99999.banners; //横幅
  delete a99999.minorBackup;  //设备列表
  delete a99999.mainBackup;  //备份还原
  body = JSON.stringify(a99999);
}

$done({ body });
