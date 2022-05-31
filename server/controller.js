module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Good times are coming!", "You will make a new friend today", "Your JS skills will get better", "You will finally get to go on vacation", "Avoid the color fuchsia for the week"];
      
        let randomFort = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFort];
      
        res.status(200).send(randomFortune);
    },

    coinFlip: (req, res) => {
        const headstails = ["Heads", "Tails"];
      
        let randomHT = Math.floor(Math.random() * headstails.length);
        let randomFlip = headstails[randomHT];
      
        res.status(200).send(randomFlip);
},

    motivationBtn: (req, res) => {
        const motivate = ["You got this!", "It'll be Friday before you know it!", "Pain is temporary", "Be the best you, you can be!"];
      
        let motivationalPhrase = Math.floor(Math.random() * motivate.length);
        let randomMotivation = motivate[motivationalPhrase];
      
        res.status(200).send(randomMotivation);
},
    goalBtn: (req, res) => {
       
      console.log(req.body)
      res.status(200).send('Nice Goals!');
},
    

}


