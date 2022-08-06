const express = require('express');
const app = express();
const Notes = require('./models/notes');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

app.listen(5000);
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://laislabonita:laislabonita@cluster0.jsallec.mongodb.net/?retryWrites=true&w=majority').then(function () {
    app.get('/', function (req, res) {

        res.send('This is the homepage');
    });
    const noteRouter=require('./routes/notes');
app.use('/notes',noteRouter);
})
//home route

