var i;
var bt = document.getElementsByClassName("item");
for (i = 0; i < bt.length; i++) {
    bt[i].onclick = function () {
        click(this);
    };
}

var exp = document.getElementById('exp');
var res = document.getElementById('res');

function click(e) {
    var value = e.textContent;

    switch (value) {
        case '=':
            calc();
            break;
        case 'C':
            clean();
            break;
        default:
            exp.value += value;
            break;
    }
}

function calc() {
    var r = eval(exp.value);
    if (!isFinite(r) || exp.value == "")
        res.value = "invalid expression";
    else
        res.value = r;
}

function clean() {
    res.value = "";
    exp.value = "";
}
