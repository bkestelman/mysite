$(document).ready(function() {
	$(".ring").click(function() {
		moveOverButtons(this);
	});
});

var firstMove = true;

function moveOverButtons(e) {
	$("#contact-form").hide();
	if(firstMove) {
		firstMove = false;
		$(".spacer").addClass("grow");
		changeContent(e);
		$(".welcome").slideUp(function() {
			$(".content").fadeToggle(function() {
				if($(e).attr("id") === "contact") {
					console.log("Equal");
					$("#contact-form").fadeToggle();
				}
			});
		});
	}
	else {
		$(".content").fadeToggle(function() {
			changeContent(e)
		});
		$(".content").fadeToggle(function() {
			if($(e).attr("id") === "contact") {
				console.log("Equal");
				$("#contact-form").fadeToggle();
			}
		});

	}
	$(".ring").hide().show(0);
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
			$("#content-header").text("Contact");
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
"Android app where people vote on and ask political questions.<br><br>";

var resumeContent = "<br>" + 
"My Resum\u00e9 (coming soon...)";

var contactContent = {
	src: "https://docs.google.com/forms/d/e/1FAIpQLSd5nshKIuo1JhK9wmddf8BU6nnVcJ4Q90fq3WjMn2yL5cqVpA/viewform?embedded=true",
	frameborder: "0",
	marginheight: "0",
	marginwidth: "0"
};

