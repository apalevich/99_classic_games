function main() {
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
        jewels[i][j] = Math.floor(Math.random() * bgColors.length);
        
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

$(document).ready(function(){
    main();
})