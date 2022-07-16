const req = new XMLHttpRequest();

req.onload = function () {
  console.log("ALL DONE WITH REQUEST");
  const data = JSON.parse(this.response);
  console.log(data[0].tradePrice);
};

req.onerror = function () {
  console.log("ERROR");
  console.log(this);
};

req.open(
  "GET",
  "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-BTC"
);
req.send();
