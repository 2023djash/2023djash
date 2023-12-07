/*
>mg中文版——解锁次数
*/

var body = $response.body.replace(/msg_count_limit":\d+/g,'msg_count_limit":1')
.replace(/task_num":\d+/g,'task_num":888888888')
.replace(/timestamp":\d+/g,'timestamp":2999999999')
.replace(/use_num":\d/g,'use_num":99999999999')
$done({ body });
