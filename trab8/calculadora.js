var exp;
var res;

$(document).ready(function() {
	exp = $("#exp");
	res = $("#res");
	var button = ["0","1","2","3","4","5","6","7","8","9","C","=","+","-","*","/"]
	for(i=0; i<button.length;i++) {
		$(".grid").append('<div class="item">'+button[i]+'</div>');
	}
	$(".item").click(function(){
		clickB($(this));	
	});
});

function clickB(e) {
    var value = e.html();

    switch (value) {
        case '=':
            calc();
            break;
        case 'C':
            clean();
            break;
        default:
            exp.val(exp.val()+value);
            break;
    }
}

function calc() {
    var r = eval(exp.val());
    if (!isFinite(r) || exp.val() == "")
        res.val("invalid expression");
    else
        res.val(r);
}

function clean() {
    res.val("");
    exp.val("");
}