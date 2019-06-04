const express = require('express');
const app = express();

// 设置
app.use(require('cors')());
app.use(express.json());

// 连接 mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vue-element-admin', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
});

const Article = mongoose.model(
  'Article',
  new mongoose.Schema({
    title: { type: String },
    body: { type: String }
  })
);

app.get('/', async (req, res) => {
  res.send('index');
});

// 提交文章
app.post('/api/article', async (req, res) => {
  const article = await Article.create(req.body);
  res.send({
    message: '文章创建成功'
  });
});

// 文章列表
app.get('/api/article', async (req, res) => {
  const article = await Article.find();
  res.send(article);
});

//删除文章
app.delete('/api/article/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.send({
    message: '删除成功'
  });
});

// 更新文章
app.put('/api/article/:id/edit', async (req, res) => {
  await Article.findByIdAndUpdate(req.params.id, req.body);
  res.send({
    message: '更新成功'
  });
});

// 获取单条数据
app.get('/api/article/:id/details', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.send(article);
});

app.listen(3001, () => {
  console.log('http://localhost:3001');
});
