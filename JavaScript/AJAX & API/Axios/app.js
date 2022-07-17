axios
  .get(
    "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-BTC"
  )
  .then((res) => {
    console.log("KRW-BTC:", res.data[0].tradePrice);
  })
  .catch((err) => {
    console.log("ERROR!", err);
  });

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get(
      "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-BTC"
    );
    console.log("TradePrice is now :", res.data[0].tradePrice);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");

const getAzeGag = async () => {
  try {
    // header 추가
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "error";
  }
};

const addGagList = async () => {
  const gagText = await getAzeGag();
  const newLi = document.createElement("li");
  newLi.append(gagText);
  jokes.append(newLi);
};

btn.addEventListener("click", addGagList);
