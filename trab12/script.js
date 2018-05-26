$(document).ready(function () {
    listarUtilizadores();
    getCategoria();
    insereOuEditaDados();
    eliminaUtilizador();
    copiaLinhaParaForm();
    resetForm();
    mudaCor();
    mudaCorAnula();
});


function listarUtilizadores() {
    $.ajax({
        url: 'lista.php',
        type: 'POST',
        data: {},
        dataType: 'json',
        success: function (data) {
            var myHtml = "";
            $.each(data.contactos, function (i, item) {
                    myHtml += "<hr><p class='linha'>" + (i + 1) + " | " + item.utilizador + " | " + item.nome + " | " + item.idade + " | " + item.c_nome + "</p>";

                }),
                $("#lista").html(myHtml);

        },

        error: function (xhr, status, error) {
            $('#resultado').html("Status:" + status + "<br/>Error: " + error);
        }
    });

}

function insereOuEditaDados() {
    $(document).on("click", "#gravar", function () {

        var user = $("#utilizador").val();
        var nome = $("#nome").val();
        var pass = $("#password").val();
        var idade = $("#idade").val();
        var cat = $("#categoria").val();

        var obj = {
            
            user: user,
            nome: nome,
            pass: pass,
            idade: idade,
            cat: cat
            
        };
        var myJson = JSON.stringify(obj);

        if (user != null) {
            $.ajax({
                url: 'insere.php',
                type: 'POST',
                data: {
                    "json": myJson
                },
                dataType: 'json',
                success: function (msg) {
                    $('#resultado').html(msg + "<p>Utilizador adicionado Com Sucesso</p>");
                },
                error: function (xhr, status, error) {
                    $('#resultado').html("Status:" + status + "<br/>Error: " + error);
                }
            });
        } else {
            $.ajax({
                url: 'edita.php',
                type: 'POST',
                data: {
                    "json": myJson
                },
                dataType: 'json',
                success: function (msg) {
                    $('#resultado').html(msg + "<p>Alteração efectuada Com Sucesso</p>");
                },
                error: function (xhr, status, error) {
                    $('#resultado').html("Status:" + status + "<br/>Error: " + error);
                }
            });
        }
        listarUtilizadores();
    });
}

function copiaLinhaParaForm() {
    $(document).on('click', '.linha', function () {
        var linha = $(this).text();
        linha = linha.split(" | ");
        //var id = linha[0];        
        var utilizador = linha[1];
        $("#utilizador").val(utilizador);
        var nome = linha[2];
        $("#nome").val(nome);
        var idade = linha[3];
        $("#idade").val(idade);
        var cat = linha[4];
        var catNum = $('#categoria option:contains(' + cat + ')').val();
        $("#categoria").val(catNum);
    });

}

function eliminaUtilizador() {
    $(document).on("click", "#eliminar", function () {
        var user = $("#utilizador").val();
        $.ajax({
            url: 'elimina.php',
            type: 'POST',
            data: {
                "user": user
            },
            dataType: 'json',
            success: function (msg) {
                $('#resultado').html(msg + "<p>Utilizador adicionado Com Sucesso</p>");
            },
            error: function (xhr, status, error) {
                $('#resultado').html("Status:" + status + "<br/>Error: " + error);
            }
        });
        listarUtilizadores();
    });
}

function resetForm() {
    $(document).on('click', '#reset', function () {
        $("#utilizador").val("");
        $("#nome").val("");
        $("#password").val("");
        $("#idade").val("");
        $("#categoria").val(-1);
    });

}

function getCategoria() {
    var cat = $("#categoria").val();
    $.ajax({
        url: 'categoria.php',
        type: 'POST',
        data: {},
        dataType: 'json',
        success: function (data) {
            $.each(data.categorias, function (i, item) {
                $("#categoria").append('<option value="' + item.id + '">' + item.nome + '</option>')
            })
        },
        error: function (xhr, status, error) {
                $('#resultado').html("Status:" + status + "<br/>Error: " + error);
            }
    });
}

function mudaCor() {
    $(document).on('mouseenter', '.linha', function () {
        $(this).css({
            "background-color": "green"
        })
    });
}

function mudaCorAnula() {
    $(document).on('mouseleave', '.linha', function () {
        $(this).css({
            "background-color": "transparent"
        })
    });
}