import fs from "fs";

// readFile() - callback
fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// readFileSync() - synchronous version
const data = fs.readFileSync("./test.txt", "utf8");
console.log(data);
