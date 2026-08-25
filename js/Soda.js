var gnuolcud = JSON.parse($response.body);

gnuolcud.result = {
    "products" : [
        {
            "managed" : false,
            "status" : "CANCELLED",
            "startDate" : 1673222400000,
            "productId" : "com.snowcorp.soda.subscribe.oneyear",
            "expireDate" : 32662137600000
        }
    ],
    "activated" : true
};

$done({body : JSON.stringify(gnuolcud)});