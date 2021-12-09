var canvas1 = $('#canvas1')[0];
var canvas2 = $('#canvas2')[0];
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var scoreLabel1 = $('#score1')[0];
var scoreLabel2 = $('#score2')[0];
var score1 = 0;
var score2 = 0;
var size = 4;
var width = canvas1.width / size - 6;
var cells1 = [];
var cells2 = [];
var loss1 = false;
var loss2 = false;
var img1 = $("#first")[0];
var img2 = $("#second")[0];
var img3 = $("#third")[0];
var img4 = $("#fourth")[0];
var img5 = $("#fifth")[0];
var img6 = $("#sixth")[0];
var img7 = $("#seventh")[0];
var img8 = $("#eighth")[0];
var img9 = $("#ninth")[0];
var img10 = $("#tenth")[0];
var img11 = $("#eleventh")[0];
var img12 = $("#twelfth")[0];

startGame();

function cell(row, coll) {
  this.value = 0;
  this.x = coll * width + 5 * (coll + 1);
  this.y = row * width + 5 * (row + 1);
}

function createCells1() {
  var i, j;
  for(i = 0; i < size; i++) {
    cells1[i] = [];
    for(j = 0; j < size; j++) {
      cells1[i][j] = new cell(i, j);
    }
  }
}

function createCells2() {
  var i, j;
  for(i = 0; i < size; i++) {
    cells2[i] = [];
    for(j = 0; j < size; j++) {
      cells2[i][j] = new cell(i, j);
    }
  }
}

function drawCell1(cell) {
  ctx1.beginPath();
  var pat1 = ctx1.createPattern(img1, "repeat");
  var pat2 = ctx1.createPattern(img2, "repeat");
  var pat3 = ctx1.createPattern(img3, "repeat");
  var pat4 = ctx1.createPattern(img4, "repeat");
  var pat5 = ctx1.createPattern(img5, "repeat");
  var pat6 = ctx1.createPattern(img6, "repeat");
  var pat7 = ctx1.createPattern(img7, "repeat");
  var pat8 = ctx1.createPattern(img8, "repeat");
  var pat9 = ctx1.createPattern(img9, "repeat");
  var pat10 = ctx1.createPattern(img10, "repeat");
  var pat11 = ctx1.createPattern(img11, "repeat");
  var pat12 = ctx1.createPattern(img12, "repeat");

  ctx1.rect(cell.x, cell.y, width, width);
  switch (cell.value) {
    case 0 :
      ctx1.fillStyle = '#A9A9A9';
      break;
    case 2 :
      ctx1.fillStyle = pat1;
      break;
    case 4 :
      ctx1.fillStyle = pat2;
      break;
    case 8 :
      ctx1.fillStyle = pat3;
      break;
    case 16 :
      ctx1.fillStyle = pat4;
      break;
    case 32 :
      ctx1.fillStyle = pat5;
      break;
    case 64 :
      ctx1.fillStyle = pat6;
      break;
    case 128 :
      ctx1.fillStyle = pat7;
      break;
    case 256 :
      ctx1.fillStyle = pat8;
      break;
    case 512 :
      ctx1.fillStyle = pat9;
      break;
    case 1024 :
      ctx1.fillStyle = pat10;
      break;
    case 2048 :
      ctx1.fillStyle = pat11;
      break;
    case 4096 :
      ctx1.fillStyle = pat12;
      break;
    default :
      ctx1.fillStyle = '#ff0080';
  }
  ctx1.fill();
}

function drawCell2(cell) {
  ctx2.beginPath();
  var pat1 = ctx2.createPattern(img1, "repeat");
  var pat2 = ctx2.createPattern(img2, "repeat");
  var pat3 = ctx2.createPattern(img3, "repeat");
  var pat4 = ctx2.createPattern(img4, "repeat");
  var pat5 = ctx2.createPattern(img5, "repeat");
  var pat6 = ctx2.createPattern(img6, "repeat");
  var pat7 = ctx2.createPattern(img7, "repeat");
  var pat8 = ctx2.createPattern(img8, "repeat");
  var pat9 = ctx2.createPattern(img9, "repeat");
  var pat10 = ctx2.createPattern(img10, "repeat");
  var pat11 = ctx2.createPattern(img11, "repeat");
  var pat12 = ctx2.createPattern(img12, "repeat");

  ctx2.rect(cell.x, cell.y, width, width);
  switch (cell.value) {
    case 0 :
      ctx2.fillStyle = '#A9A9A9';
      break;
    case 2 :
      ctx2.fillStyle = pat1;
      break;
    case 4 :
      ctx2.fillStyle = pat2;
      break;
    case 8 :
      ctx2.fillStyle = pat3;
      break;
    case 16 :
      ctx2.fillStyle = pat4;
      break;
    case 32 :
      ctx2.fillStyle = pat5;
      break;
    case 64 :
      ctx2.fillStyle = pat6;
      break;
    case 128 :
      ctx2.fillStyle = pat7;
      break;
    case 256 :
      ctx2.fillStyle = pat8;
      break;
    case 512 :
      ctx2.fillStyle = pat9;
      break;
    case 1024 :
      ctx2.fillStyle = pat10;
      break;
    case 2048 :
      ctx2.fillStyle = pat11;
      break;
    case 4096 :
      ctx2.fillStyle = pat12;
      break;
    default :
      ctx2.fillStyle = '#ff0080';
  }
  ctx2.fill();
}


document.onkeydown = function (event) {
  if (!loss1) {
    if (event.keyCode === 87) {
      moveUp1();
    } else if (event.keyCode === 68) {
      moveRight1();
    } else if (event.keyCode === 83) {
      moveDown1();
    } else if (event.keyCode === 65) {
      moveLeft1();
    }
  }

  if (!loss2) {
    if (event.keyCode === 38) {
      moveUp2();
    } else if (event.keyCode === 39) {
      moveRight2();
    } else if (event.keyCode === 40) {
      moveDown2();
    } else if (event.keyCode === 37) {
      moveLeft2();
    }
  }

  if (loss1 === true && loss2 === true) {
    if (score1 > score2) {
      window.alert("Player 1 wins!");
    } else if (score2 > score1) {
      window.alert("Player 2 wins!");
    } else {
      window.alert("Wow! It's a draw!");
    }
  }
  scoreLabel1.innerHTML = 'Player 1 : ' + score1 + ' points';
  scoreLabel2.innerHTML = 'Player 2 : ' + score2 + ' points';
}

function startGame() {
  createCells1();
  drawAllCells1();
  pasteNewCell1();
  pasteNewCell1();
  createCells2();
  drawAllCells2();
  pasteNewCell2();
  pasteNewCell2();
  hidePics();
}

function finishGame1() {
  canvas1.style.opacity = '0.5';
  loss1 = true;
}

function finishGame2() {
  canvas2.style.opacity = '0.5';
  loss2 = true;
}

function drawAllCells1() {
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      drawCell1(cells1[i][j]);
    }
  }
}

function drawAllCells2() {
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      drawCell2(cells2[i][j]);
    }
  }
}


function pasteNewCell1() {
  var countFree = 0;
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      if(!cells1[i][j].value) {
        countFree++;
      }
    }
  }
  if(!countFree) {
    finishGame1();
    return;
  }
  while(true) {
    var row = Math.floor(Math.random() * size);
    var coll = Math.floor(Math.random() * size);
    if(!cells1[row][coll].value) {
      cells1[row][coll].value = 2 * Math.ceil(Math.random() * 2);
      drawAllCells1();
      return;
    }
  }
}


function pasteNewCell2() {
  var countFree = 0;
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      if(!cells2[i][j].value) {
        countFree++;
      }
    }
  }
  if(!countFree) {
    finishGame2();
    return;
  }
  while(true) {
    var row = Math.floor(Math.random() * size);
    var coll = Math.floor(Math.random() * size);
    if(!cells2[row][coll].value) {
      cells2[row][coll].value = 2 * Math.ceil(Math.random() * 2);
      drawAllCells2();
      return;
    }
  }
}


function moveRight1() {
  var i, j;
  var coll;
  for(i = 0; i < size; i++) {
    for(j = size - 2; j >= 0; j--) {
      if(cells1[i][j].value) {
        coll = j;
        while (coll + 1 < size) {
          if (!cells1[i][coll + 1].value) {
            cells1[i][coll + 1].value = cells1[i][coll].value;
            cells1[i][coll].value = 0;
            coll++;
          } else if (cells1[i][coll].value == cells1[i][coll + 1].value) {
            cells1[i][coll + 1].value *= 2;
            score1 +=  cells1[i][coll + 1].value;
            cells1[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell1();
}

function moveLeft1() {
  var i, j;
  var coll;
  for (i = 0; i < size; i++) {
    for (j = 1; j < size; j++) {
      if (cells1[i][j].value) {
        coll = j;
        while (coll - 1 >= 0) {
          if (!cells1[i][coll - 1].value) {
            cells1[i][coll - 1].value = cells1[i][coll].value;
            cells1[i][coll].value = 0;
            coll--;
          } else if (cells1[i][coll].value == cells1[i][coll - 1].value) {
            cells1[i][coll - 1].value *= 2;
            score1 += cells1[i][coll - 1].value;
            cells1[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell1();
}

function moveUp1() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = 1; i < size; i++) {
      if (cells1[i][j].value) {
        row = i;
        while (row > 0) {
          if (!cells1[row - 1][j].value) {
            cells1[row - 1][j].value = cells1[row][j].value;
            cells1[row][j].value = 0;
            row--;
          } else if (cells1[row][j].value == cells1[row - 1][j].value) {
            cells1[row - 1][j].value *= 2;
            score1 += cells1[row - 1][j].value;
            cells1[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell1();
}

function moveDown1() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = size - 2; i >= 0; i--) {
      if (cells1[i][j].value) {
        row = i;
        while (row + 1 < size) {
          if (!cells1[row + 1][j].value) {
            cells1[row + 1][j].value = cells1[row][j].value;
            cells1[row][j].value = 0;
            row++;
          } else if (cells1[row][j].value == cells1[row + 1][j].value) {
            cells1[row + 1][j].value *= 2;
            score1 += cells1[row + 1][j].value;
            cells1[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell1();
}

function moveRight2() {
  var i, j;
  var coll;
  for (i = 0; i < size; i++) {
    for (j = size - 2; j >= 0; j--) {
      if (cells2[i][j].value) {
        coll = j;
        while (coll + 1 < size) {
          if (!cells2[i][coll + 1].value) {
            cells2[i][coll + 1].value = cells2[i][coll].value;
            cells2[i][coll].value = 0;
            coll++;
          } else if (cells2[i][coll].value == cells2[i][coll + 1].value) {
            cells2[i][coll + 1].value *= 2;
            score2 += cells2[i][coll + 1].value;
            cells2[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell2();
}

function moveLeft2() {
  var i, j;
  var coll;
  for (i = 0; i < size; i++) {
    for (j = 1; j < size; j++) {
      if (cells2[i][j].value) {
        coll = j;
        while (coll - 1 >= 0) {
          if (!cells2[i][coll - 1].value) {
            cells2[i][coll - 1].value = cells2[i][coll].value;
            cells2[i][coll].value = 0;
            coll--;
          } else if (cells2[i][coll].value == cells2[i][coll - 1].value) {
            cells2[i][coll - 1].value *= 2;
            score2 += cells2[i][coll - 1].value;
            cells2[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell2();
}

function moveUp2() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = 1; i < size; i++) {
      if (cells2[i][j].value) {
        row = i;
        while (row > 0) {
          if (!cells2[row - 1][j].value) {
            cells2[row - 1][j].value = cells2[row][j].value;
            cells2[row][j].value = 0;
            row--;
          } else if (cells2[row][j].value == cells2[row - 1][j].value) {
            cells2[row - 1][j].value *= 2;
            score2 += cells2[row - 1][j].value;
            cells2[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell2();
}

function moveDown2() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = size - 2; i >= 0; i--) {
      if (cells2[i][j].value) {
        row = i;
        while (row + 1 < size) {
          if (!cells2[row + 1][j].value) {
            cells2[row + 1][j].value = cells2[row][j].value;
            cells2[row][j].value = 0;
            row++;
          } else if (cells2[row][j].value == cells2[row + 1][j].value) {
            cells2[row + 1][j].value *= 2;
            score2 += cells2[row + 1][j].value;
            cells2[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell2();
}

function hidePics() {
  $("#first").hide();
  $("#second").hide();
  $("#third").hide();
  $("#fourth").hide();
  $("#fifth").hide();
  $("#sixth").hide();
  $("#seventh").hide();
  $("#eighth").hide();
  $("#ninth").hide();
  $("#tenth").hide();
  $("#eleventh").hide();
  $("#twelfth").hide();
}