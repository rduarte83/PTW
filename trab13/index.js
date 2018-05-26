$(document).ready(function () {
    $.ajax({
        url: 'AIIRM2015.json',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function (data) {
            var myHtml = ['<table id="tabela"><tr><th>ID</th><th>Autarquia</th><th>Receitas Totais</th></tr>'];
            data["d"].sort(getSortOrder("receitastotais"));
            $.each(data["d"], function (i, item) {
            myHtml += "<tr><td>" + (i + 1) + "</td><td>" + item.dscautarquia + "</td><td>" + item.receitastotais + "€</td></tr>";
            });
            $("#lista").html(myHtml);

            //Ordenar a lista por financiamentouniaoeuropeia
            data["d"].sort(getSortOrder("financiamentouniaoeuropeia"));
            maisnome = data["d"][0].dscautarquia;
            maisvalor = data["d"][0].financiamentouniaoeuropeia;
            $("#mais").html("<h3>" + maisnome + " - " + maisvalor + "€ </h3>")
        }
    });
});

function getSortOrder(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        }
        return 0;
    }
}
