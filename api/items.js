const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const itemSchema = new mongoose.Schema({
    name: String,
});

const Item = mongoose.model('Item', itemSchema);

// 데이터 POST
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).send(newItem);
});

// 데이터 GET
router.get('/', async (req, res) => {
    const items = await Item.find();
    res.status(200).send(items);
});

module.exports = router;