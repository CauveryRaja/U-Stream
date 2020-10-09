const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const videos = require('./routes/videos');
const keyObj = require('./config/keys');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Establish MongoDB connections
mongoose.connect(keyObj.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas successfully...'))
.catch((err) => console.log(err));

// Request Routes
app.use('/user', users);
app.use('/video', videos);

// Default Route
app.use('/', function(req, res) {
    res.send('<h2>Welcome to U-Stream REST API</h2>');
});

// Heroku process port or Default Port
const port = process.env.PORT | 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
