const PORT = process.env.PORT || 3000;
const html = require("./routes/html");
const express = require("express");
const app = express();
require("./routes/api")(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use('/', html);
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});