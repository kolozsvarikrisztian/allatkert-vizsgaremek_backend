const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const Allat = db.Allat;
const Kategoria = db.Kategoria;


app.use(cors());
app.use(express.json());

app.get('/api/allatok', (req, res) => {
    Allat.findAll({include: {model:Kategoria, as: "Kategoria"}})
    .then(data => {
        res.status(200).send(data);
    })
});

app.get('/api/allatok/:id', (req, res) => {
    const id = Number(req.params.id);
    Allat.findByPk(id, {include: {model:Kategoria, as: "Kategoria"}})
    .then(data => {
        if (data)
            res.status(200).send(data);
        else
            res.status(404).send("Ilyen állat nem létezik");
    })
});

app.listen(9000);