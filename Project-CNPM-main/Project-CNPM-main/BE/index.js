const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

dotenv.config();
const app = express();
const port = 3000;
var hbs = require('express-hbs');
const expressHbs = require('express-handlebars');
const path = require('path');


//connect to mongoDB
mongoose.connect(process.env.URL_MONGODB, {
    // autoIndex: false
}, (err) => {
    if(err) throw err;
    console.log('Mongodb connection.')
})


app.use(express.json({ extended: true }));
app.use(express.urlencoded());


// Use `.hbs` for extensions and find partials in `views/partials`.
// app.engine('hbs', hbs.express4({
//   partialsDir: __dirname + '/views/partials'
// }));
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

app.engine('.hbs', expressHbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());

app.use('/api', routes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
