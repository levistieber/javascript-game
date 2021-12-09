var canvas = $('#canvas')[0];
var ctx = canvas.getContext('2d');
var scoreLabel = $('#score')[0];
var score = 0;
var size = 4;
var width = canvas.width / size - 6;
var cells = [];
var loss = false;
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

function createCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    cells[i] = [];
    for(j = 0; j < size; j++) {
      cells[i][j] = new cell(i, j);
    }
  }
}


function drawCell(cell) {
  ctx.beginPath();
  var pat1 = ctx.createPattern(img1, "repeat");
  var pat2 = ctx.createPattern(img2, "repeat");
  var pat3 = ctx.createPattern(img3, "repeat");
  var pat4 = ctx.createPattern(img4, "repeat");
  var pat5 = ctx.createPattern(img5, "repeat");
  var pat6 = ctx.createPattern(img6, "repeat");
  var pat7 = ctx.createPattern(img7, "repeat");
  var pat8 = ctx.createPattern(img8, "repeat");
  var pat9 = ctx.createPattern(img9, "repeat");
  var pat10 = ctx.createPattern(img10, "repeat");
  var pat11 = ctx.createPattern(img11, "repeat");
  var pat12 = ctx.createPattern(img12, "repeat");

  ctx.rect(cell.x, cell.y, width, width);
  switch (cell.value) {
    case 0 :
      ctx.fillStyle = '#A9A9A9';
      break;
    case 2 :
      ctx.fillStyle = pat1;
      break;
    case 4 :
      ctx.fillStyle = pat2;
      break;
    case 8 :
      ctx.fillStyle = pat3;
      break;
    case 16 :
      ctx.fillStyle = pat4;
      break;
    case 32 :
      ctx.fillStyle = pat5;
      break;
    case 64 :
      ctx.fillStyle = pat6;
      break;
    case 128 :
      ctx.fillStyle = pat7;
      break;
    case 256 :
      ctx.fillStyle = pat8;
      break;
    case 512 :
      ctx.fillStyle = pat9;
      break;
    case 1024 :
      ctx.fillStyle = pat10;
      break;
    case 2048 :
      ctx.fillStyle = pat11;
      break;
    case 4096 :
      ctx.fillStyle = pat12;
      break;
    default :
      ctx.fillStyle = '#ff0080';
  }
  ctx.fill();
}

document.onkeydown = function (event) {
  if (!loss) {
    if (event.keyCode === 87 || event.keyCode === 38) {
      moveUp();
    } else if (event.keyCode === 68 || event.keyCode === 39) {
      moveRight();
    } else if (event.keyCode === 83 || event.keyCode === 40) {
      moveDown();
    } else if (event.keyCode === 65 || event.keyCode === 37) {
      moveLeft();
    }
  }
  if (loss === true) {
      window.alert("Game over! Your points: " + score);
    }
  scoreLabel.innerHTML = score + ' points';
}

function startGame() {
  createCells();
  drawAllCells();
  pasteNewCell();
  pasteNewCell();
  hidePics();
}

function finishGame() {
  canvas.style.opacity = '0.5';
  loss = true;
}


function drawAllCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      drawCell(cells[i][j]);
    }
  }
}


function pasteNewCell() {
  var countFree = 0;
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      if(!cells[i][j].value) {
        countFree++;
      }
    }
  }
  if(!countFree) {
    finishGame();
    return;
  }
  while(true) {
    var row = Math.floor(Math.random() * size);
    var coll = Math.floor(Math.random() * size);
    if(!cells[row][coll].value) {
      cells[row][coll].value = 2 * Math.ceil(Math.random() * 2);
      drawAllCells();
      return;
    }
  }
}


function moveRight() {
  var i, j;
  var coll;
  for(i = 0; i < size; i++) {
    for(j = size - 2; j >= 0; j--) {
      if(cells[i][j].value) {
        coll = j;
        while (coll + 1 < size) {
          if (!cells[i][coll + 1].value) {
            cells[i][coll + 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll++;
          } else if (cells[i][coll].value == cells[i][coll + 1].value) {
            cells[i][coll + 1].value *= 2;
            score +=  cells[i][coll + 1].value;
            cells[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveLeft() {
  var i, j;
  var coll;
  for (i = 0; i < size; i++) {
    for (j = 1; j < size; j++) {
      if (cells[i][j].value) {
        coll = j;
        while (coll - 1 >= 0) {
          if (!cells[i][coll - 1].value) {
            cells[i][coll - 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll--;
          } else if (cells[i][coll].value == cells[i][coll - 1].value) {
            cells[i][coll - 1].value *= 2;
            score += cells[i][coll - 1].value;
            cells[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveUp() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = 1; i < size; i++) {
      if (cells[i][j].value) {
        row = i;
        while (row > 0) {
          if (!cells[row - 1][j].value) {
            cells[row - 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row--;
          } else if (cells[row][j].value == cells[row - 1][j].value) {
            cells[row - 1][j].value *= 2;
            score += cells[row - 1][j].value;
            cells[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveDown() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = size - 2; i >= 0; i--) {
      if (cells[i][j].value) {
        row = i;
        while (row + 1 < size) {
          if (!cells[row + 1][j].value) {
            cells[row + 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row++;
          } else if (cells[row][j].value == cells[row + 1][j].value) {
            cells[row + 1][j].value *= 2;
            score += cells[row + 1][j].value;
            cells[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell();
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