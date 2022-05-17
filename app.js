console.log('I am working')
let eaglesnumber = 0
let seahawksnumber = 0


function teamoneonePoint() {

    eaglesnumber += 6

    console.log('6 points', eaglesnumber, 'eagles touchdown');
    drawscoreOne()
}

function teamtwoonePoint() {

    seahawksnumber += 6

    console.log('6 points', seahawksnumber, 'seahawks touchdown');
    drawscoreTwo()

}



function drawscoreOne() {
    let scoreOne = document.getElementById("score-one")

    console.log(scoreOne);

    scoreOne.innerText = eaglesnumber

}

function drawscoreTwo() {

    let scoreTwo = document.getElementById("score-two")
    console.log(scoreTwo);

    scoreTwo.innerText = seahawksnumber
}

function resetScore() {
    eaglesnumber = 0
    seahawksnumber = 0
    console.log(eaglesnumber, 'eagle number')
    console.log(seahawksnumber, 'seahawks number')
    drawscoreOne()
    drawscoreTwo()
}


function teamonethreePoint() {
    eaglesnumber += 3

    console.log('3 points', eaglesnumber, 'eagles field goal');

    drawscoreOne()

}

function teamtwothreePoint() {
    seahawksnumber += 3

    console.log('3 points', seahawksnumber, 'seahawk field goal')

    drawscoreTwo()
}

function teamoneresetPoints() {
    eaglesnumber = 0
    console.log(eaglesnumber, 'eagles number');

    drawscoreOne()

}


function teamtworesetPoints() {
    seahawksnumber = 0
    console.log(seahawksnumber, 'seahawk number');

    drawscoreTwo()

}

function teamonePenalty() {
    eaglesnumber--

    console.log(eaglesnumber, 'eagles penalty');

    drawscoreOne()
}


function teamtwoPenalty() {
    seahawksnumber--

    console.log(seahawksnumber, 'eagles penalty');

    drawscoreTwo()
}