import * as http from 'http';
import express = require('express');
import path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('body-parser').urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const server = http.createServer(app);

const PORT = 3005;
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
