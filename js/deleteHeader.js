// ========= deleteHeader for RevenueCat (Duke) ========= //
var headers = $request.headers;
delete headers["x-revenuecat-etag"];
delete headers["X-RevenueCat-ETag"];
delete headers["if-none-match"];
delete headers["If-None-Match"];
$done({
  headers: headers
});
