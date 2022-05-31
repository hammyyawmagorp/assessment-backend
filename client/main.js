const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


fortuneBtn.addEventListener('click', getFortune)



const coinFlipBtn = document.getElementById("indecisiveButton")

const coinFlip = () => {
    axios.get("http://localhost:4000/api/coinflip/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

coinFlipBtn.addEventListener('click', coinFlip)



const motivationButton = document.getElementById("motivationButton")

const motivationBtn = () => {
    axios.get("http://localhost:4000/api/motivation/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

motivationButton.addEventListener('click', motivationBtn)


const goalsButton = document.getElementById("submit-goals-btn")

const goalsBtn = () => {
    const goalFinalText = document.getElementById("goal-text").value;
    axios.post('http://localhost:4000/api/goal', {
        text: goalFinalText
    }).then(res => {
        alert(res.data);
    })

}

goalsButton.addEventListener('click', goalsBtn);

