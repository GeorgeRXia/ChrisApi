var pageContent; 
var msg = "";
var date;

var containerDate = {

1: "Jan",
2: "Feb"


};

$(document).ready(function(){

	pageContent = document.getElementById("outter-container");
	

	$.ajax({

		url:"https://api-practice-wdi.herokuapp.com/posts",
		data:{



		},
		dataType: "json",
		success: function(response){

			console.log(response);

			for(let i = 0; i < response.posts.length ; i++){


				
				console.log(response.posts[i].title);

				date = response.posts[i].date.split("/");

				var month = date[0];
				var day = date[1];
				console.log(date);

				console.log(containerDate[month]);

				msg += "<div class= 'pictures-content-container'>";
				
				msg += "<img class='pictures' src =" + response.posts[i].img + ">";

				msg += "<div class= 'content'>";
				msg +=  "<div class= 'lato'>" + containerDate[month] +" " + day + "</div>"; 

				msg +=  "<div class= 'slabo'>"+ response.posts[i].title;

				msg += "<div>" + "___" + "</div>";
				
				msg += "</div>" + "<div class= 'lato'>" + response.posts[i].categories[0]+ "</div>" + "</div>" ;

				msg += "</div>"

			}

			pageContent.innerHTML = msg;






		}


	})

})