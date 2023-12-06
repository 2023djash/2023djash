/*
易截图

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/2023djash/2023djash/main/js/yjt.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/

var yjt = JSON.parse($response.body);
info.group_id = "3";
info.vip = "1";
info.group = "3000.01.01";
info.nickname = "Death";
$done({ body: JSON.stringify });
