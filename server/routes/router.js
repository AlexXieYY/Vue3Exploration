// routes.js
const express = require('express');
const router = express.Router();
const pool = require('../db.js');

// 定义GET请求的路由，从数据库获取数据
router.get('/api', async (req, res) => {
    try {
        // 从数据库查询数据
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM test'); // 替换 your_table 为你的表名
        connection.release();

        // 将查询结果发送给前端
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
