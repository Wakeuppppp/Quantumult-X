// getInfo.js 修改共享群组
let body = $response.body;
try {
    let json = JSON.parse(body);
    const userData = json.result.data;
    userData.is_active = true;
    // 更新原始JSON结构
    json.result.data = userData;
    console.log("会员权限已解锁成功");

    body = JSON.stringify(json);
} catch (error) {
    console.log("JSON解析失败: " + error);
}

$done({ body });