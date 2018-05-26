var pos;

$(document).ready(function () {
	$("#date").datepicker();
	$('.header').on('click', '#addB' , function () {
		addTask($(this));
	});
	$('#tasks').on('click', '.remB', function () {
		removeTask($(this));
	});
	$('#tasks').on('click', '.item', function () {
		$(".item").css({"background-color": "transparent"});
		pos = $(this);
		editTask($(this));
		
	});
	$('.header').on('click', '#editB' , function () {
		addTaskEdit(pos);
		$("#editB").attr("id","addB");
		$("#addB").html("+");
		$("#name").val("");
		$("#date").val("");
		
	});
});


function addTask(b) {
	var tasks = $("#tasks").html();
	var name = $("#name").val();
	var date = $("#date").val();
	var newTask = '<div class="item"><div class="itemdesc">' + name + ' (' + date + ')' + '</div><div class="remB">-</div></div>';
	tasks += newTask;
	$("#tasks").html(tasks);
}

function addTaskEdit(b) {
	var tasks = $("#tasks").html();
	var name = $("#name").val();
	var date = $("#date").val();
	var newTask = '<div class="itemdesc">' + name + ' (' + date + ')' + '</div><div class="remB">-</div>';
	b.html(newTask);
	$(b).css({"background-color": "transparent"});
}

function removeTask(b) {
	$(b).parent().remove();
}

function editTask(b) {
	$(b).css({"background-color": "black"});
	var texto = ($(b).text());
	var nameNew = texto.slice(0, texto.indexOf("(")-1); 
	var dateNew = texto.slice(texto.indexOf("(")+1,texto.indexOf(")"));
	$("#name").val(nameNew);
	$("#date").val(dateNew);
	$("#addB").attr("id","editB");
	$("#editB").html("v");
}