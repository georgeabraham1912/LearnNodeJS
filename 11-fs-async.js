// const fs = require('fs');
// fs.readFile

const { readFile, writeFile, write } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(result);
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `This is the result of async: ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("Done with this task");
      }
    );
  });
});
console.log("Starting next task");