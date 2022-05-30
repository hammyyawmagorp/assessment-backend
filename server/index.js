const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { coinFlip } = require('./controller')

app.get("/api/coinflip", coinFlip);

const { motivation } = require('./controller')

app.get("/api/motivation", motivationBtn);

app.listen(4000, () => console.log("Server running on 4000"));


app.put("/api/fortune", (req, res) => {
    let existingFortune  = req.params.fortune
    let newFortune = req.body.fortune
    for (let i = 0; i < users.length; i++) {
      if (fortunes[i].fortune === existingFortune) {
        fortune[i].fortune = newFortune
        res.status(200).send("You have a new fortune.")
        return
      }
    }
  })