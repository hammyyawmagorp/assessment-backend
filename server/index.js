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

const { motivationBtn } = require('./controller')

app.get("/api/motivation", motivationBtn);

const { goalBtn } = require('./controller')

app.post("/api/goal", goalBtn);

// app.post('/api/goal', (req, res) => {
//     console.log(req.body) 

//     res.status(200).send('Nice Goals!')
//   })

app.listen(4000, () => console.log("Server running on 4000"));