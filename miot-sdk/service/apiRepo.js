const API_REPO = {
  // 所有 smarthome api
  '/v2/irdevice/controllers': {},
  '/v2/ircode/categories': {},
  '/v2/ircode/area/area_id': {},
  '/v2/ircode/area/lineups': {},
  '/v2/ircode/area/province/cities': {},
  '/v2/ircode/area/provinces/china': {},
  '/v2/ircode/area/city/areas': {},
  '/v2/ircode/iptv/brands': {},
  '/v2/ircode/category/brands': {},
  '/v2/irdevice/controller/add': {},
  '/v2/irdevice/controller/keys/set': {},
  '/v2/irdevice/send_key': {},
  '/v2/irdevice/controller/del': {},
  '/v2/irdevice/controller/update': {},
  '/v2/irdevice/controller/keys': {},
  '/v2/irdevice/controller/key/update': {},
  '/v2/irdevice/controller/key/del': {},
  '/v2/irdevice/controller/key/click': {},
  '/v2/irdevice/controller/functions': {},
  '/scene/edit': {},
  '/scene/get': {},
  '/scene/start': {},
  '/scene/delete': {},
  '/scene/list': {},
  '/scene/history': {},
  '/scene/tplv2': {},
  '/share/bluetoothkeyshare': {},
  '/home/profile': {},
  '/device/blelockbindinfo': {},
  '/home/profiles': {},
  '/location/set': {},
  '/location/weather': {},
  '/home/checkversion': {},
  '/location/area_prop_info': {},
  '/location/find_ip': {},
  '/v2/device/check_device_version': {}, // 对外接口, 供插件使用
  '/home/multi_checkversion': {}, // 对内 APP 接口, 会过滤门铃
  '/home/latest_version': {},
  '/v2/device/latest_ver': {},
  '/device/event': {},
  '/v2/device/set_extra_data': {},
  '/v2/device/range_get_extra_data': {},
  '/v2/device/del_extra_data': {},
  '/v2/device/get_extra_data': {},
  '/v2/user/statistics': {},
  '/voicectrl/ai_devs': {},
  '/voicectrl/xiaoice_skills': {},
  '/voicectrl/get_skills': {},
  '/v2/voicectrl/ai_flash_briefing': {},
  '/v2/api/aivs': {},
  '/device/getsetting': {},
  '/v2/device/getsettingv2': {},
  '/device/setsetting': {},
  '/device/delsetting': {},
  '/user/set_user_device_data': {},
  '/user/get_user_device_data': {},
  '/user/del_user_device_data': {},
  '/v2/user/get_user_device_log': {},
  '/user/get_user_coll': {},
  '/user/set_user_coll': {},
  '/user/edit_user_coll': {},
  '/user/del_user_coll': {},
  '/home/getmapfileurl': {},
  '/home/getrobomapurl': {},
  '/user/del_user_map': {},
  '/home/device_list': {},
  '/service/getappconfig': {},
  '/service/getappconfigv2': {},
  '/home/getcountry': {},
  '/v2/device/batch_set_props': {},
  '/v2/device/set_props': {},
  '/device/batchdevicedatas': {},
  '/device/getThirdConfig': {},
  '/v2/third/synccall': {},
  '/third/api': {},
  '/third/api_result': {},
  '/user/get_device_auth': {},
  '/v2/home/get_interim_file_url': {},
  '/home/getfileurl': {},
  '/v2/user/getuserdevicedatatab': {},
  '/v2/home/range_get_open_config': {},
  '/v2/nfckey/bind_nfc_card': {},
  '/v2/nfckey/get_nfc_card': {},
  '/yaokan/insertunmodel': {},
  '/scene/idfy_get': {},
  '/scene/idfy_edit': {},
  '/v2/user/create_member': {},
  '/v2/user/update_member': {},
  '/v2/user/remove_member': {},
  '/v2/user/get_member': {},
  '/user/setpdata': {},
  '/user/getpdata': {},
  '/v2/user/get_device_data_raw': {},
  '/v2/nfckey/create_se_session': {},
  '/v2/nfckey/replace_se_isdkey': {},
  '/v2/nfckey/reset_lock_primarykey': {},
  '/v2/nfckey/handle_se_response': {},
  '/v2/device/bledevice_info': {},
  '/miotspec/prop/get': {},
  '/miotspec/prop/set': {},
  '/miotspec/action': {},
  '/user/get_user_config': {},
  '/user/get_third_user_config': {},
  '/user/set_user_config': {},
  '/user/set_third_user_config': {},
  '/v2/device/multi_button_template': {},
  '/v2/device/init_membership': {},
  '/device/deviceinfo': {},
  '/v2/device/ble_event': {},
  '/share/get_share_user': {},
  '/share/share_request': {},
  '/v2/aftersale/validate': {},
  '/v2/aftersale/create': {},
  '/v2/aftersale/list': {},
  '/v2/aftersale/detail': {},
  // 房间
  '/homeroom/addroom': {},
  '/v2/homeroom/gethome': {},
  // 摄像机API
  '/wx/app/v1/get/pushSwitch': {},
  '/wx/app/v1/put/pushSwitch': {},
  '/miot/camera/app/v1/get/alarmSwitch': {},
  '/miot/camera/app/v1/put/motionDetectionSwitch': {},
  '/miot/camera/app/v1/put/sensitive': {},
  '/miot/camera/app/v1/put/pushSwitch': {},
  '/miot/camera/app/v1/put/areaChangePushSwitch': {},
  '/miot/camera/app/v1/put/pedestrianDetectionPushSwitch': {},
  '/miot/camera/app/v1/put/babyCryPushSwitch': {},
  '/miot/camera/app/v1/put/aiPushSwitch': {},
  '/miot/camera/app/v1/put/petPushSwitch': {},
  '/miot/camera/app/v1/put/facePushSwitch': {},
  '/miot/camera/app/v1/vip/status': {},
  '/miot/camera/app/v1/getVideoListByFigure': {},
  '/miot/camera/app/v1/modify/figureOfVideo': {},
  '/common/app/get/eventlist': {},
  '/common/app/v2/delete/files': {},
  '/miot/camera/app/v2/get/spec/property': {},
  '/miot/camera/app/v2/put/spec/property': {},
  '/common/app/markRead': {},
  '/common/device/vip/status': {},
  '/common/app/vip/status': {},
  '/miot/camera/app/v1/get/fileIdMetas': {},
  '/miot/camera/app/v1/get/figures': {},
  '/miot/camera/app/v1/get/figureByName': {},
  '/miot/camera/app/v1/get/figureByFigureId': {},
  '/miot/camera/app/v1/add/figure': {},
  '/miot/camera/app/v1/add/face': {},
  '/common/app/m3u8': {},
  '/common/app/v1/img': {},
  '/miot/camera/app/v1/put/faceSwitch': {},
  '/miot/camera/app/v1/put/babyCrySwitch': {},
  '/miot/camera/app/v2/get/alarmSwitch': {},
  '/miot/camera/app/v2/put/motionDetectionSwitch': {},
  '/common/app/file/delete/status': {},
  '/miot/camera/app/v1/set/pushStyle': {},
  '/v2/public/get_weekday_info': {},
  '/v2/device/blt_get_beaconkey': {},
  '/v2/device/set_alarm_info': {},
  '/v2/device/get_alarm_info': {},
  '/v2/device/del_alarm_info': {},
  '/miot/camera/app/v1/vip/statusBatch': {},
  '/miot/camera/app/v1/get/allDetectionSwitch': {},
  '/miot/camera/app/v1/put/genericEventPushSwitch': {},
  '/user/del_user_device_data_batch': {},
  '/miot/camera/app/v1/tags': {},
  '/miot/camera/app/v1/feedback': {},
  '/miot/camera/app/v1/alarm/playlist/limit': {},
  '/miot/camera/app/v1/alarm/delete': {},
  '/miot/camera/app/v1/alarm/videoStoreId': {},
  '/user/send_user_opt_notify': {},
  '/home/genfilepresignedurl': {},
  '/device/devicepass': {},
  // 保险箱门锁类 报警电话和胁迫指纹的api权限
  '/v2/device/set_break_lock_alarm_info': {},
  '/v2/device/get_break_lock_alarm_info': {},
  '/v2/device/set_hijack_alarm_info': {},
  '/v2/device/get_hijack_alarm_info': {},
  // FDS KS3 相关
  '/v2/home/get_interim_file_url_pro': {},
  '/v2/home/get_carhome': {},
  '/v2/home/genfileurl_v3': {},
  '/v2/home/genpresignedurl': {},
  '/v2/home/genpresignedurl_v3': {},
  '/home/getfileurl_v3': {},
  '/v2/home/getfileurl_v3': {},
  '/v2/recipes/query': {},
  '/v2/recipes/getById': {},
  '/home/devupgrade': {},
  '/v2/device/get_auto_upgrade_config': {},
  '/v2/device/get_firmware_history': {},
  // 多键开关相关
  '/v2/home/device_support_split': {},
  '/v2/home/device_split_merge': {},
  '/v2/device/update_membership': {},
  '/v2/device/switch_subclass': {},
  '/device/rename': {},
  '/appgateway/miot/appdeviceinfo_service/AppDeviceInfoService/get_last_online': {},
  // 往服务器塞/get 二进制数据。
  '/common/app/data/put': {},
  '/common/app/data/scan': {},
  '/common/app/data/v2/preDataGet': {},
  // 海外版获取回复语音
  '/common/app/data/v2/preDataGetOverseas': {},
  '/common/app/data/remove': {},
  '/common/app/data/modify': {},
  '/common/app/data/get': {},
  '/rpc/send': {},
  '/common/app/get/mergePhotoMeta': {},
  '/miot/camera/app/v1/modify/figure': {},
  '/miot/camera/app/v1/delete/figure': {},
  '/miot/camera/app/v1/delete/face': {},
  '/miot/camera/app/v1/mp4': {},
  '/miot/camera/app/v1/cloud/file/exist': {},
  // 窗帘组API
  '/v2/groupv2/create': {},
  '/v2/groupv2/query_status': {},
  '/v2/groupv2/query_tags': {},
  // 摄像头云存相关
  '/common/app/v1/cloud/file/exist': {},
  '/common/app/get/cloudlist': {},
  '/common/app/v1/capacity': {},
  '/v2/scene/get_rec_in_plugin': {},
  '/common/app/get/fileIdEvents': {},
  '/business/camera/video_vip_tips': {},
  '/business/camera/video_banner': {},
  '/business/camera/video_home_vip_tips': {},
  '/business/camera/video_patch_tips': {},
  // 每日故事开关接口
  '/miot/camera/app/v1/put/dailyStorySwitch': {},
  '/v2/device/set_camera_phoneservice_switch': {}, // 设置电话服务开关
  '/v2/device/set_camera_third_alarm_info': {}, // 设置电话服务联系电话
  '/v2/device/get_camera_third_alarm_info': {}, // 获取电话服务联系电话以及开关
  '/v2/device/get_wx_license_expire': {}, // IPC微信视频通话获取激活码到期时间
  // 新的获取设备属性接口，结果中带有上报的时间戳
  '/v2/device/batchgetdatas': {},
  // 免费人脸
  '/miot/camera/app/v1/vip/freeface/addFreeface': {},
  '/miot/camera/app/v1/vip/freeface/status': {},
  "/miot/camera/app/v1/delete/figures": {}, // 删除人物S
  "/miot/camera/app/v1/get/faces": {}, // 获取用户标注的所有人脸
  "/miot/camera/app/v1/get/figureFaces": {}, // 获取某个人物的所有人脸
  "/miot/camera/app/v1/get/unmarkFaces": {}, // 获取用户未标注的所有人脸
  "/miot/camera/app/v1/get/figureByMarkedFace": {}, // 根据标记的人脸获取人物
  "/miot/camera/app/v1/add/cluster/face": {}, // 添加人脸到人物2
  "/miot/camera/app/v1/delete/faces": {}, // 从人物中删除人脸S
  "/miot/camera/app/v1/faces/search": {}, // 搜索人脸
  "/miot/camera/app/v1/get/face/img": {}, // 获取人脸照片
  "/miot/camera/app/v1/get/facesCluster": {}, // 获取3天内人脸聚类的结果
  "/common/miot/camera/app/get/faceCluster/eventlist": {}, // 获取事件列表（返回3天内faceIds里面的人脸事件）
  "/miot/camera/app/v1/mark/faceClustering/mistake": {}, // 聚类报错接口
  '/miot/camera/app/v1/addFigureToGroup': {}, // 添加人物到分组
  '/miot/camera/app/v1/get/common/figures': {}, // 获取所有人物(小米智能门)
  '/miot/camera/app/v1/get/groups': {}, // 获取所有分组
  '/miot/camera/app/v1/get/groupFigures': {}, // 获取某个分组下的所有人物
  '/miot/camera/app/v1/add/group': {},
  '/miot/camera/app/v1/modify/group': {}, // 修改分组
  '/miot/camera/app/v1/delete/group': {}, // 删除分组
  '/miot/camera/app/v1/put/detectionAlgorithmSwitch': {},
  // 摄氏度/华氏度一键切换接口
  '/v2/user/set_common_config': {},
  '/v2/user/get_common_config': {},
  // 门锁需要使用的接口
  '/v2/device/setLockPushSwitch': {},
  '/v2/device/getLockPushSwitch': {},
  '/v2/device/delLockPushSwitch': {},
  '/v2/device/insurance': {},
  '/v2/device/engineer': {},
  // 疯景1代门铃迁移rn接口
  '/common/app/delete/files': {},
  '/common/app/get/playlist': {},
  '/common/app/get/fileIdinfo': {},
  '/miot/camera/app/v1/vip/freevip/status': {},
  '/common/app/add/face': {},
  '/common/app/delete/face': {},
  '/common/app/delete/figure': {},
  '/common/app/faces/search': {},
  '/common/app/get/faceIds': {},
  '/common/app/get/face/img': {},
  '/common/app/get/faces': {},
  '/common/app/get/figures': {},
  '/v2/device/get_filter_device': {},
  '/v2/device/auth_partner_device': {},
  '/v2/device/cancel_partner_device': {},
  '/v2/device/get_partner_device': {},
  'v2/public/get_product_config': {},
  '/common/app/add/figure': {},
  // 设备访问记录相关接口
  '/v2/device/setRecord': {},
  '/v2/device/batchSetRecord': {},
  '/v2/device/getRecordByUid': {},
  '/v2/device/batchGetRecord': {},
  // lvmi需求
  '/home/batchgetfileurl': {},
  '/v2/user/setuserdevicedatatab': {},
  '/home/genpresignedurl': {},
  // 设备云端消息订阅
  '/v2/user/get_subscribe_device': {},
  '/ot/pubsub/subscribe': {}, // 订阅接口
  '/ot/pubsub/unsubscribe': {}, // 取消订阅接口
  '/ot/pubsub/query': {}, // 查询订阅者订阅的topic接口
  // 每日故事列表接口
  '/miot/camera/app/v1/dailyStory/playlist': {},
  // 每日故事m3u8
  '/miot/camera/app/v1/dailyStory/m3u8': {},
  // 每日故事删除
  '/miot/camera/app/v1/dailyStory/delete': {},
  // 人脸聚类相关接口
  '/common/app/get/faceCluster/eventlist': {},
  // 根据用户的uid换取微信小程序的openid
  '/wx_call/get_openid_by_uid': {},
  // 耗材标准配置服务端接口
  '/v2/home/standard_consumable_items': {},
  // 获取中枢的列表
  '/v2/device/get_lan_hub': {},
  // 获取自动更新列表
  '/v2/device/auto_upgrade_list': {},
  // 获取预置音频
  '/common/app/data/v2/preDataGetCommon': {},
  // 设备服务时对比米系品牌
  '/v2/product/get_product_brands': {},
  // 事件统计
  '/common/app/get/event/statistics': {},
  // 趣拍回忆相关
  '/miot/camera/app/v1/nineSeconds/m3u8': {},
  '/common/app/v1/dailyStory/generateMemory': {},
  '/common/app/get/emotion/status': {},
  '/common/app/get/event/emostatiscs': {},
  // M30门锁相关
  '/scenesrv/apppushservice/GetDeviceEmergencyTelephoneNotificationInfo': {},
  // 事件顺序相关
  '/common/app/get/event/sort': {},
  '/common/app/set/event/sort': {},
  // 云存相关
  '/miot/camera/app/v1/get/cloudSwitch': {},
  '/miot/camera/app/v1/put/cloudSwitch': {},
  '/smarthome/product/panel/plugin/quickDeviceList': {},
  '/smarthome/product/panel/plugin/devices': {},
  '/smarthome/product/panel/plugin/quickSceneList': {},
  '/smarthome/product/panel/plugin/scenes': {},
  '/smarthome/product/panel/plugin/resetSetting': {},
  '/smarthome/product/panel/plugin/wifispeakerDid': {},
  '/appgateway/miot/appsceneservice/AppSceneService/GetManualSceneList': {},
  '/smarthome/product/panel/plugin/quickHomeAddress': {},
  '/smarthome/product/panel/client/quickSceneList': {},
  '/smarthome/product/panel/plugin/privacyLog': {},
  '/scenesrv/apppushservice/GetWechatPushSwitch': {}, // 小程序
  '/scenesrv/apppushservice/SetWechatPushSwitch': {},
  '/business/camera/vip_tips_switch': {},
  '/camera_cloud/card_cloud_switch/set': {},
  // 摄像机人形检测开关
  '/miot/camera/app/v1/put/serverPeopleMotionCheckSwitch': {},
  // 大家电——空调
  '/smarthome/product/acpanel/plugin/device/list': {},
  '/smarthome/product/acpanel/plugin/device/save': {},
  '/smarthome/product/acpanel/plugin/scene/list': {},
  '/smarthome/product/acpanel/plugin/scene/save': {},
  '/smarthome/product/acpanel/client/v1/device/list': {},
  '/smarthome/product/acpanel/client/v1/sub': {}
};
export default API_REPO;