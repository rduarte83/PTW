var timer;
var t;
var turn = "bola";
var turnAnt = "cruz";
var simb = "O";
var simbAnt = "X";
var size = 3;
var sqArray = [];
var match;

$(document).ready(function () {
    $("#sizetxt").val(size);
    startTimeout();
    createGrid();
    $("#sizetxt").on("change", function () {
        t = 0;
        createGrid();
    });

    $("#activeP").text("Jogador: " + simb);
});

function createGrid() {
    $(".footer").hide();
    t = 0;
    size = $("#sizetxt").val();
    var sizeC = "";
    $(".grid").html("");
    for (i = 0; i < size; i++) {
        sqArray[i] = [];
        for (j = 0; j < size; j++) {
            sqArray[i][j] = [];
            $(".grid").append('<div class=items id="item' + i + j + '\"></div>');
        }
        sizeC += "50px ";
    }
    $(".grid").css({
        "grid-template-columns": sizeC
    });
    $(".items").click(function () {
        play($(this));
    });
}

function startTimeout() {
    timer = setInterval(function () {
        t += 10;
        $("#pbar").progressbar({
            value: t
        });
        $("#pbar > div").css({
            'background': 'greenyellow'
        });
        if (t == 100) {
            changePlayer();
            t = 0;
        }
    }, 1000);
}

function changePlayer() {
    if (turn == "bola") {
        simbAnt = "O";
        simb = "X";
        turnAnt = turn;
        turn = "cruz";
        $("#activeP").text("Jogador: " + simb);
    } else {
        simbAnt = "X"
        simb = "O"
        turnAnt = turn;
        turn = "bola";
        $("#activeP").text("Jogador: " + simb);
    }
}

function play(e) {
    var bg = e.css("background-Image");
    if (bg == "none" || bg == "") {
        e.css({
            "background": "black url('Imagens/" + turn + ".jpg')"
        });
        changePlayer();
    }
    t = 0;
    check();
}

function check() {
    var sqImg;
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            sqArray[i][j] = $("#item" + i + j).css("background-image");
        }
    }
    horiz();
    vert();
    obliq1();
    obliq2();
    draw();
}

function horiz() {
    match = 1;
    for (i = 0; i < size; i++) {
        for (j = 1; j < size; j++) {
            if (sqArray[i][0] == sqArray[i][j] && sqArray[i][j] != "none") {
                match++;
            }
        }
        endMsg();
        match = 1;
    }
    draw();
}

function vert() {
    match = 1;
    for (j = 0; j < size; j++) {
        for (i = 1; i < size; i++) {
            if (sqArray[0][j] == sqArray[i][j] && sqArray[i][j] != "none") {
                match++;
            }
        }
        endMsg();
        match = 1;
    }
    draw();
}

function obliq1() {
    match = 1;
    for (i = 1; i < size; i++) {
        if (sqArray[0][0] == sqArray[i][i] && sqArray[i][i] != "none") {
            match++;
        }
    }
    endMsg();
    match = 1;
}

function obliq2() {
    match = 1;
    for (i = 1; i < size; i++) {
        if (sqArray[size - 1][0] == sqArray[(size - 1) - i][i] && sqArray[(size - 1) - i][i] != "none") {
            match++;
        }
    }
    endMsg();
    match = 1;
}

function endMsg() {
    if (match == size) {
        $(".footer").show();
        $(".footer").text('O jogador ' + simbAnt + ' ganhou!');
        $(".items").unbind("click");
        clearInterval(timer);
    }
}

function draw() {
    var filled = 0;
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (sqArray[i][j] != "none") {
                filled++;
            }
        }
    }
    if ((filled == Math.pow(size, 2)) && (match != size)) {
        $(".footer").show();
        $(".footer").text('Jogo empatado!');
        $(".items").unbind("click");
        clearInterval(timer);
    }
}
