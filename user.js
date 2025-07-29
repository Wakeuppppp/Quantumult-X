// user.js 会员解锁脚本
let body = $response.body;
try {
    let json = JSON.parse(body);
    json.purchasedAt = {
        "__type": "Date",
        "iso": "2025-07-29T03:32:39.000Z"
    }
    json.entitlement = "pro"
    json.pro = "yearly"
    json.membership = 2
    json.expiredAt = {
        "__type": "Date",
        "iso": "2025-08-05T03:32:39.000Z"
    }
    
    json.actived = true
    console.log("会员权限已解锁成功");

    body = JSON.stringify(json);
} catch (error) {
    console.log("JSON解析失败: " + error);
}

$done({ body });