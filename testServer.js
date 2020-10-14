const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json("hello")
})

app.listen(5000, (err) => {
    if(err) throw err;
    console.log('server is running...')
})