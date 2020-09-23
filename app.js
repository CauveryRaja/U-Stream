const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const urlObj = require('./config/urls');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(urlObj.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas successfully...'))
.catch((err) => console.log(err));

app.use('/user', userRoutes);

app.use('/', function(req, res) {
    res.send('<h2>Welcome to Express JS</h2>');
});

app.listen(3000);