var pageContent; 
var msg = "";

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


				console.log(response.posts[i].categories[0]);
				console.log(response.posts[i].title);


				msg += "<div class= 'pictures-content-container'>";
				
				msg += "<img class='pictures' src =" + response.posts[i].img + ">" + "</br>";

				msg += "<div class= 'content'";
				msg +=  response.posts[i].date + "</div> " + "</br>" 

				msg += response.posts[i].title + "</div>";
				
				msg += "</br>" + response.posts[i].categories[0] + "</div>" ;

				msg += </div>""

			}

			pageContent.innerHTML = msg;






		}


	})

})