var gBoard = []
var gBoardSize = 4

var gNums = generateNums()
var correctNum = 1
var countDown = new Date()

function onInit() {
    // generateNums()
    createBoard()
    renderBoard()
    // console.log(gNums)
}

function renderBoard() {
    // createBoard()
    var strHTML = '<table>'
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]
            const className = cell ? 'occupied' : ''
            strHTML += `<td data-i=${i} data-j=${j} onclick="onCellClicked(this, ${i}, ${j})" class="cell ${className}">${cell}</td>` 
        }
        strHTML += '</tr>'
    }
    strHTML += '</table>'
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function onCellClicked(elCell, cellI, cellJ) {
    var currCell = gBoard[cellI][cellJ]

    if (currCell === correctNum) {
        elCell.classList.remove('wrong')
        elCell.classList.add('pop')
        // elCell.style.visibility = 'hidden'
        correctNum++
        console.log(correctNum)
        if(correctNum > gBoardSize**2) {
            correctNum = 1
        }
    } else {
        elCell.classList.add('wrong')   }
    // renderBoard()
}

function timer(){

}

function createBoard() {
    const board = []
    const boardMat = gBoardSize
    for (var i = 0; i < boardMat; i++) {
        gBoard[i] = []
        for (var j = 0; j < boardMat; j++) {
            gBoard[i][j] = drawNum()
        }
    }
    return board
}
// console.log(createBoard);




function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function generateNums() {
    gNums = []
    for (var i = 1; i < gBoardSize**2 +1 ; i++) {
        gNums.push(i)
    }
    return gNums
}


function drawNum() {
    var randIdx = getRandomInt(0, gNums.length)
    var num = gNums[randIdx]
    gNums.splice(randIdx, 1)
    return num
}