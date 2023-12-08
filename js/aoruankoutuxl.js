/*************************************

傲软抠图
傲软扫描
傲软PDF转换
傲软PDF编辑
傲软投屏
咖映
轻闪PDF
乃糖小组件
佐糖
佐糖照片修复
脚本作者：chxm1023

**************************************

[rewrite_local]

^https?:\/\/.*\.(aoscdn\.com|apsapp\.cn) url script-response-body https://raw.githubusercontent.com/2023djash/2023djash/main/js/aoruankoutuxl.js 

[mitm] 

hostname = *.aoscdn.com, *.apsapp.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const vipa = '/base/vip/client/authorizations';
const vipb = '/vips';


if ($request.url.indexOf(vipa) != -1){
  chxm1023.data.is_activated = 1;
  chxm1023.data.remain_days = 999999999;
  chxm1023.data.expire_time = "2099-09-09 09:09:09";
  chxm1023.data.expired_at = 4092600296;
  chxm1023.data.license_type = "premium";
  chxm1023.data.durations = 999999999;
  chxm1023.data.vip_special = 1;
}

if ($request.url.indexOf(vipb) != -1){
  chxm1023.data = {
    "group_expired_at" : 0,
    "is_tried" : 0,
    "max_devices" : 1,
    "period_type" : "active",
    "candy_expired_at" : 0,
    "pending" : 0,
    "remained_seconds" : 0,
    "limit" : 0,
    "expired_at" : 4092600296,
    "candy" : 0,
    "license_type" : "premium",
    "quota" : 999999999,
    "status" : 1,
    "vip_special" : 1,
    "coin" : 100
  };
}

$done({body : JSON.stringify(chxm1023)});
