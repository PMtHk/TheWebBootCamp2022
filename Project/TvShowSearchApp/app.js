const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  // console.log("Submitted");
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm }, headers: {} };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let show of shows) {
    if (show.show.image) {
      const newImg = document.createElement("img");
      newImg.src = show.show.image.medium;
      document.body.append(newImg);
    }
  }
};
