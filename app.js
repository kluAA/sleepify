const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const songs = require("./routes/api/songs");
const users = require("./routes/api/users");
const artists = require("./routes/api/artists");
const path = require('path');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use("/api/users", users);
app.use("/api/songs", songs);
app.use("/api/artists", artists);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));