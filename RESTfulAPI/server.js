var express = require('express');
var app = express();
var apiRouters = require("./routers/api");
var staticFileServer = require("./routers/staticFile.js");
var path = require("path");

app.use(express.static(path.join(__dirname, '../static'))); //定义请求静态文件的路径
app.use("/", staticFileServer);
app.use('/api/v1', apiRouters);

app.listen(3000, function () {
  console.log("running at port 3000");
})
