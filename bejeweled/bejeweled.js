// settings
let gemSize = 64, // size of a gem
    gemClass = "gem", // class of separate gems gems
    gemIdPrefix = "gem", // prefix for ids
    numRows = 6, // number of rows
    numCols = 7, // number of columns
    jewels = new Array(), // two-dimension array of active gems
    gameState = "pick", // one of five states: pick, switch, revert, remove, refill

// colors
bgColors = new Array(
    "magenta",
    "mediumblue",
    "yellow",
    "lime",
    "cyan",
    "orange",
    "crimson",
    "gray"
)

function main() {
    // create a gamefield
    $("body")
        .append('<div id="gamefield"></div>')
        .css({
            "background-color": "black",
            "margin": "0"
        });
    $('#gamefield')
        .css({
            "background-color": "#000000",
            "position": "relative",
            "width": (numCols*gemSize) + "px",
            "height": (numRows*gemSize) + "px"
        });

    for (let i = 0; i < numRows; i++) {
        jewels[i] = new Array();
        for (let j = 0; j < numCols; j++) {
            jewels[i][j] = -1;
        }
    }

    // generate random gems for the field
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++){
            // avoid gems create the line from the beginning
            do {
                jewels[i][j] = Math.floor(Math.random() * bgColors.length);
            } while(isStreak(i, j));
            
            let currentGem = gemIdPrefix + '_' + i + '_' + j;
            $("#gamefield").append('<div class="' + gemClass + '" id = "' + currentGem + '"></div>');
            $("#" + currentGem).css({
                "top": (i * gemSize) + 4 + "px",
                "left": (j * gemSize) + 4 + "px",
                "width": "54px",
                "height": gemSize - 10 + "px",
                "width": gemSize - 10 + "px",
                "position": "absolute",
                "border": "1px solid white",
                "cursor": "pointer",
                "background-color": bgColors[jewels[i][j]]
            });
        }
    }
}

function isStreak(row, col) {
    return isHorizontalStreak(row, col) || isVerticalStreak(row, col);
}

function isVerticalStreak(row, col){
    let gemValue = jewels[row][col];
    let streak = 0;
    let tmp = row;
    while(tmp > 0 && jewels[tmp - 1][col] == gemValue){
      streak++;
      tmp--;
    }
    tmp = row;
    while(tmp < numRows - 1 && jewels[tmp + 1][col] == gemValue){
      streak++;
      tmp++;
    }
    return streak > 1;
  }
  
  function isHorizontalStreak(row, col){
    let gemValue = jewels[row][col];
    let streak = 0;
    let tmp = col;
    while(tmp > 0 && jewels[row][tmp - 1] == gemValue){
      streak++;
      tmp--;
    }
    tmp = col;
    while(tmp < numCols - 1 && jewels[row][tmp + 1] == gemValue){
      streak++;
      tmp++;
    }
    return streak > 1;
  }

$(document).ready(function(){
    main();
})