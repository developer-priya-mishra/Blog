const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening at port no : ${PORT}`));

mongoose.connect(
    process.env.MONGODB_URL_STRING,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;
        console.log("MongoDb established")
    }
)

app.use('/auth', require("./routes/auth_routes"));
app.use('/blog', require("./routes/blog_routes"));