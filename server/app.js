const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/router')

app.use(bodyParser.json());
app.use(cors());

// 跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")  // 全部
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173")  // 本机前端
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

app.use(router)

// 启动服务器
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
