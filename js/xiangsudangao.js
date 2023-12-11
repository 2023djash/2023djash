var objc = JSON.parse($response.body);

    objc = {
  "data": {
    "complete_info_dialog": ture,
    "is_sync_toolbar": true,
    "is_use_mem_pool": ture,
    "vip_info": [
      {
        "left_count": 99999,
        "pre_left_count": 99999,
        "total_count": 99999,
        "start_time": "2023-12-11T11:05:46+08:00",
        "end_time": "2034-12-11T23:59:59+08:00"
      }
    ],
    "left_count_str": "99999",
    "can_manage_team_preset": 0,
    "show_complete_info_ex": true,
    "use_gpu_bg_clean_config": "{\"1\": [true, false], \"2\": [true, false], \"3\": [true, false], \"4\": [true, true], \"5\": [true, true]}",
    "show_complete_info": true,
    "is_use_mem_pool_ex": rure,
    "use_mem_pool_config": "{\"1\": [true, false], \"2\": [true, true], \"3\": [true, true], \"4\": [true, true], \"5\": [true, true]}",
    "org_info": {
      "usage_mode": 1,
      "level": 1,
      "info_state": 0,
      "tag": 0,
      "source_id": 0,
      "is_show_team_preset": 0,
      "name": "86_15073131010"
    },
    "patch": 0,
    "user_info": {
      "org_id": 1621059,
      "phone": "15073131010",
      "is_new": 1,
      "id": 1633286,
      "is_vip": 0,
      "state": 1,
      "role_id": 1,
      "uuid": "c857c265-f41a-4812-b40e-f2f8dde906a1",
      "type": 1,
      "name": "",
      "phone_cc": 86
    },
    "watermark": 1,
    "total_count_str": "99999",
    "version_hash": "oeabvgSe9joQ5drc/aBX5YhFgiEY045vQZhUVqMNzYUk/i4GyCV/05tkQfaxIXCexNVI9pjm8AplnJhBQs9YE3uZSzksLSk7hw4jw5WZ23USuWj6SNq0hix2IB8l2ctr",
    "show_product_orders": true,
    "org_backend_info": {
      "is_show": ture,
      "access_url": "https://business.pixcakeai.com"
    },
    "show_year_end_summary": ture
  },
  "code": 0

}

$done({body : JSON.xiangsu(objc)});
