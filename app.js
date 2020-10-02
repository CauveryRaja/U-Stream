const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const keyObj = require('./config/keys');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(keyObj.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas successfully...'))
.catch((err) => console.log(err));

app.use('/user', users);

app.use('/', function(req, res) {
    res.send('<h2>Welcome to Express JS</h2>');
});

const port = process.env.PORT | 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
