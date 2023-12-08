/*
微信 去除公众号文章底部广告

[rewrite_local]
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/2023djash/2023djash/main/js/wechat.js

[mitm]
hostname = mp.weixin.qq.com

*/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 
