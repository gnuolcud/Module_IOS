// ========= Locket Gold VIP Universal Injector (Duke) ========= //
var obj = JSON.parse(typeof $response != "undefined" && $response.body || "{}");

var goldObj = {
  "expires_date": "2099-12-31T23:59:59Z",
  "original_purchase_date": "2023-01-01T00:00:00Z",
  "purchase_date": "2023-01-01T00:00:00Z",
  "ownership_type": "PURCHASED",
  "store": "app_store",
  "is_sandbox": false,
  "period_type": "normal"
};

var goldEntitlement = {
  "expires_date": "2099-12-31T23:59:59Z",
  "product_identifier": "locket_1600_1y",
  "purchase_date": "2023-01-01T00:00:00Z"
};

if (!obj.subscriber) {
  obj.subscriber = {};
}
if (!obj.subscriber.entitlements) {
  obj.subscriber.entitlements = {};
}
if (!obj.subscriber.subscriptions) {
  obj.subscriber.subscriptions = {};
}

// Inject all possible entitlement keys
obj.subscriber.entitlements["Gold"] = goldEntitlement;
obj.subscriber.entitlements["gold"] = goldEntitlement;
obj.subscriber.entitlements["locket_gold"] = goldEntitlement;
obj.subscriber.entitlements["pro"] = goldEntitlement;
obj.subscriber.entitlements["premium"] = goldEntitlement;

// Inject all possible subscription IDs
obj.subscriber.subscriptions["locket_1600_1y"] = goldObj;
obj.subscriber.subscriptions["com.locket.gold.yearly"] = goldObj;
obj.subscriber.subscriptions["locket_gold_yearly"] = goldObj;
obj.subscriber.subscriptions["locket_gold_monthly"] = goldObj;

$done({
  body: JSON.stringify(obj)
});
