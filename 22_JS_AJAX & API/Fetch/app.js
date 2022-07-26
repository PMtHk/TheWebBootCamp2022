// fetch(
//   "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-BTC"
// )
//   .then((res) => {
//     console.log("RESPONSE, WAITING TO PARSE...", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("DATA PARSED...", data[0].tradePrice);
//   })
//   .catch((e) => {
//     console.log("ERROR", e);
//   });

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch(
      "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-BTC"
    );
    const data = await res.json();
    console.log(data[0].tradePrice);
  } catch (e) {
    console.log("ERROR", e);
  }
};
