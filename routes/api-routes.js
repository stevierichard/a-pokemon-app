const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

router.get("/api", (req, res) =>{
    console.log("Our API has been hit");
    res.json({msg:"Our API has been hit successfull"})
});

router.get("/api/all", async (req, res) =>{
const data = await readFile("data.json", "utf8");
const {pokemon} = JSON.parse(data);
res.json(pokemon)
});

router.get("/api/find/:name", async (req, res) =>{
    const data = await readFile("data.json", "utf8");
    const {pokemon} = JSON.parse(data);

    const userSearch = (req.params.name);

    const searchResults =  pokemon.find((poke) => poke.name === userSearch);

    if(typeof searchResults === "undefined"){
        return res.status(404).send({msg: "There is no pokemon in the database with that name"});
    }
    res.json(searchResults)
    });
    


router.post("/api/new", async (req, res) =>{
    const data = JSON.parse(await readFile("data.json", "utf8"));

    const newPokeman = req.body;

    newPokeman.id = data.pokemon.length + 1;

    data.pokemon.push(newPokeman);

    await writeFile("data.json", JSON.stringify(data, null, 2));
    res.json(data);
    });


module.exports = router;