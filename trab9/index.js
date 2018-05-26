var wordR;
var guess = [];
var tries = 1;
var guess2 = "";

$(document).ready(function () {
    var word = ["WEB", "PROGRAMACAO", "JQUERY", "JAVASCRIPT", "TECNOLOGIAS", "HTML", "CSS", "PHP"];
    wordR = pickWord(word);
    for (i = 0; i < wordR.length; i++) {
        guess[i] = "_";

    }
    $(".guess").html(guess);
    alert(wordR);
    $(".inner-item").click(function () {
        click($(this));
    });
});

function pickWord(word) {
    var sizeW = Math.floor((Math.random() * word.length) + 1);
    return word[sizeW];
}

function click(e) {
    e.unbind("click");
    if (wordR.indexOf(e.text())!=-1){
        for (i = 0; i < wordR.length; i++) {
            if (wordR[i] == e.text()) {
                guess[i] = ("<ins>"+e.text()+"</ins>");
                guess2+=e.text();
            } 
            $(".guess").html(guess);
        }
    } else {
        e.css({"background-image": "url(imagens/incorrect.gif)","background-repeat": "no-repeat", 
               "background-size": "cover"});
        switch (tries) {
            case 1: $(".left").append('<img src="imagens/wrong-1.gif" alt="forca" class="error">');
                tries+=1;
                break;
            case 2: $(".left").append('<img src="imagens/wrong-2.gif" alt="forca" class="error">');
                tries+=1;
                break;
            case 3: $(".left").append('<img src="imagens/wrong-3.gif" alt="forca" class="error">');
                tries+=1;
                break;
            case 4: $(".left").append('<img src="imagens/wrong-4.gif" alt="forca" class="error">');
                tries+=1;
                break;
            case 5: $(".left").append('<img src="imagens/wrong-5.gif" alt="forca" class="error">');
                tries+=1;
                break;
            case 6: $(".left").append('<img src="imagens/wrong-6.gif" alt="forca" class="error">');
                tries+=1;
                break;
            case 7: $(".left").append('<img src="imagens/wrong-7.gif" alt="forca" class="error">');
                alert("Game Over!")
                break;
        }
    }
    if (wordR==guess2){
        alert("Parabéns!")
    }
}