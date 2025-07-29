// GuoQi365.js 会员解锁脚本
let body = $response.body;

try {
  let json = JSON.parse(body);
  const fakeData = {
        "last_modify": userData.last_modify,
  			"expires_date": "4102415999520",
  			"blocked": userData.blocked,
  			"mobile": userData.mobile,
  			"permissions": userData.permissions,
  			"actived": true,
  			"rc_id": "$RCAnonymousID:d56ccc8a1db04fd980cc4f2bb53b85ca",
  			"user_id": userData.user_id,
  			"group_name": "共享群组",
  			"shared": userData.shared,
  			"entitlement": "pro",
  			"deleted": userData.deleted,
  			"group_id": userData.group_id,
  			"locked": userData.locked,
  			"token": userData.token,
        "role": userData.role,
  			"membership_type": 2,
  			"nickname": userData.nickname
  }
  // 更新原始JSON结构
  json.result.data = fakeData;
  console.log("会员权限已解锁成功"); 
  
  body = JSON.stringify(json);
} catch (error) {
  console.log("JSON解析失败: " + error);
}

$done({body});
