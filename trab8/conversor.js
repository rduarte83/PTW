$(document).ready(function () {
    $("#conv").click(function () {
        header();
    });
});

function header() {
    $(".grid-container").html("<div style='color: green'>Entrada (graus-min-seg)<br><hr></div>");
	$(".grid-container").append("<div style='color: green'>Saída (graus decimais)<br><hr></div>");
    var res = $("#txt").val();
    var spl = res.split(",");
    for (i=0; i<spl.length; i++) {
        $(".grid-container").append("<div>"+spl[i]+"</div>");
        $(".grid-container").append("<div>"+calc(spl[i])+"</div>");
    };

};

function calc (i) {
    var res = 0;
    var start = i.slice(1,i.indexOf("º"));
    var mid = i.slice(i.indexOf("º")+1,i.indexOf("'"))/60;
    var end = i.slice(i.indexOf("'")+1,i.indexOf('"'))/3600;
    res = (+start)+(+mid)+(+end);
    switch (i.indexOf(0)) {
        case "N":  
            break;
        case "S": res*=(-1);
            break;
        case "W": res*=(-1);
            break;
        case "E":
            break;
    }
    if (isNaN(res))
        res= "Coordenada Inválida";
        else res = res.toFixed(4);
    return res;
}