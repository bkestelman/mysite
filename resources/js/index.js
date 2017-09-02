$(document).ready(function() {
	$(".ring").click(moveOverButtons);
});

function moveOverButtons() {
	$(".flex-spacer").toggleClass("grow-spacer");
}

function showResume() {
	moveOverButtons();
}
