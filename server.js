const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemsRouter = require('./api/items'); // items.js 라우터 가져오기

const app = express();
const PORT = 5000;

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

// API 라우터 사용
app.use('/api/items', itemsRouter); // '/api/items' 경로에 itemsRouter 연결

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});