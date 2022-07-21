const fs = require("fs");
// console.log(fs);

const folderName = process.argv[2] || "Project";

// 비동기 방식 async way
// fs.mkdir("Dogs", { recursive: true }, (e) => {
//   console.log("In the Callback...");
//   if (e) throw e;
// });

// 동기 방식 sync way
// fs.mkdirSync("Cats");
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/app.js`);
  fs.writeFileSync(`${folderName}/app.css`);
} catch (e) {
  console.log("Something went wrong!");
  console.log(e);
}
