$(document).ready(function() {
	$(".ring").click(function() {
		moveOverButtons(this);
	});
});

var firstMove = true;

function moveOverButtons(e) {
	if(firstMove) {
		firstMove = false;
		$(".spacer").addClass("grow");
		changeContent(e);
		$(".welcome").slideUp(function() {
			firstShow(e);
			$(".main").addClass("main-rejustify");
		});
	}
	else {
		console.log("fading out all content");
		$(".content").fadeOut();
		$(".content").promise().done(function() {
			changeContent(e)
			nextShow(e);
		});
	}
	$(".ring").hide().show(0);
}

function firstShow(e) {
	$("body").removeClass("no-overflow");
	$(".base-content").fadeIn(function() {
	});

	switch($(e).attr("id")) {
		case "contact":
			$("#contact-form").fadeIn();
			$("body").addClass("no-overflow");
			break;
		case "who":
			$(".pic-container").fadeIn();
		default:
			break;
	}
}

function nextShow(e) {
	$("body").removeClass("no-overflow");
	$(".base-content").fadeIn(function() {
	});

	switch($(e).attr("id")) {
		case "contact":
			$("#contact-form").fadeIn();
			$("body").addClass("no-overflow");
			break;
		case "who":
			$(".pic-container").fadeIn();
		default:
			break;
	}
}

function changeContent(e) {
	switch($(e).attr("id")) {
		case "who":
			$("#content-header").text("I am Benito Kestelman,");
			$("#main-content").html(whoContent);
			break;
		case "projects":
			$("#content-header").text("Projects");
			$("#main-content").html(projectsContent);
			break;
		case "resume": 
			$("#content-header").text("Resum\u00e9");
			$("#main-content").html(resumeContent);
			break;
		case "contact":
			$("#content-header").text("");
			$("#main-content").html("");
			break;
		default:
			break;
	}
}

var whoContent = "<br>" +  
"a curious, ambitious computer scientist and developer, working tirelessly to cause a positive global impact. <br>Currently, I am working on a political voting app to help politicans better understand the views and needs of the population. <br><br>" + 
"My professional positions are: <br><br>" + 
"\u2014 Full Stack Developer <br><br>" + 
"\u2014 Physics and Computer Science Undergraduate at Stony Brook University <br><br>" + 
"\u2014 Research Assistant at Stony Brook <br><br>" + 
"\u2014 Part time SAT tutor <br><br>" + 
"<br><br>" +
"Past positions: <br><br>" + 
"\u2014 Teaching Assistant at Stony Brook <br><br>" + 
"\u2014 Intern at Digital Ocean <br><br>" + 
"For more details see my Resum\u00e9";

var projectsContent = "<br>" +
"Project: Democracy <br><br>" + 
"Android app where people vote on and ask political questions.<br><br>" + 
"That's my main project right now! Other projects I have on hold include wrapper libraries for Android development, stock data collection and predictions, and playing around with neural nets.<br><br>" + 
"<a href=\"https://github.com/bkestelman\" target=\"_blank\"><img src=\"resources/img/github-logo.jpg\"></a>";

var resumeContent = "<br>" + 
"My Resum\u00e9 (coming soon...)";

