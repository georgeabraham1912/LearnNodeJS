const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`Welcome to Node Server Homepage`);
  }
  if (req.url === '/about') {
    res.end(`A brief history about us`);
  }
  res.end(`<h1>Oops!</h1>
    <p>We can't seem to find what you are looking for!<p>
    <a href="/">Back Home</a>`);
});
server.listen(5000);
