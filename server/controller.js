module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Good times are coming!", "You will make a new friend today", "Your JS skills will get better", "You will finally get to go on vacation", "Avoid the color fuchsia for the week"];
      
        let randomFort = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFort];
      
        res.status(200).send(randomFortune);
    }
}  