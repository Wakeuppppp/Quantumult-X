// GuoQi365.js 会员解锁脚本
let body = $response.body;

try {
  let json = JSON.parse(body);
  
  // 修改核心会员字段
  if (json.result && json.result.data) {
    const userData = json.result.data;
    
    // 会员权限升级
    userData.entitlement = "premium";
    userData.membership_type = 1;
    userData.actived = true;
    userData.permissions = [1, 2, 3]; // 高级权限
    
    // 移除升级提示
    if (userData.event) {
      userData.event.valid = false;
      userData.event.name = "我是你爸爸";
    }
    
    // 可选：添加虚假到期时间
    userData.expireDate = "2099-12-31T23:59:59Z";
    
    // 更新原始JSON结构
    json.result.data = userData;
    
    console.log("会员权限已解锁成功");
  }
  
  body = JSON.stringify(json);
} catch (error) {
  console.log("JSON解析失败: " + error);
}

$done({body});
