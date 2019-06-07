const db = require('../utils/dbutils');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
db.connection();
app.use(bodyParser.json()).use(cors());


app.get('/search=:string', (req,res) => {
    const string = req.params.string;
    db.search(string).then(data => res.send(data))
   .catch(err => res.send(err))

});

app.get('/page=:page&limit=:limit', (req, res) => {
    console.log(req.params);
    var pageOptions = {
        page: Number(req.params.page || 0),
        limit: Number(req.params.limit || 10)
      }
    db.pagination(pageOptions).then(data => res.send(data))
    .catch(err => res.send(err))
});


const server = app.listen(3001, () => {
    console.log('server running');
});


