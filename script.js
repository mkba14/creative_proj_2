function getRandUser(){
    apikey = "NEAQ-BX5L-I9NK-WLUZ";
    const url = "https://randomuser.me/api/";
    fetch(url).then(function(response) {
            return response.json();
      }).then(function(json) {	
          console.log(json);
          //console.log('here');
          var input = '';
         //input +="<p>"+'<img src='+json.results[0].picture.medium+' alt="profile pic">'+"</p>";
         
         input  +=  '<div> '
                + '<ul class="centered-list">';
                if(Math.random() >= 0.5){
                  input += '<li>'
                        +  json.results[0].email
                        + '</li>';
                }
                if(Math.random() >= 0.5){
                  input += '<li>'
                        + json.results[0].login.username 
                        + ' is from ' + json.results[0].location.country
                        + '</li><li class="small"><br></li>';
                }
                input += '<li class="small"><i>'
                        + 'Profile created ' + moment(json.results[0].registered.date).format('MMMM YYYY')
                        + '</i></li>'
                      + '</ul>'
                      + '</div>'
         /*'<table>'
                + '<tbody>'
                + '<tr>'
                + '<th>Email</th>'
                + '<td>' + json.results[0].email + '</td>'
                + '</tr>'
                + '<tr>'
                + '<th>User since</td>'
                + '<td>'+moment(json.results[0].registered.date).format('MMMM, YYYY')+'</td>'
                + '</tr>'
                + '</tbody>'
                + '</table>'
                
                
         /*"<table>"
                    + "username: " + json.results[0].login.username
                    + '<br>'
                    + "Name: " + json.results[0].name.title 
                            + ' ' + json.results[0].name.first
                            + ' ' + json.results[0].name.last
                    +"<br>"
                    + "age: " + json.results[0].dob.age
                    + "<br>"
                    + "cell: " + json.results[0].cell
                    + "<br>phone: " + json.results[0].phone
          
                    +"</table>";*/
            
            
            document.getElementById("userResults").innerHTML = input;
      });
      
      
    
}



document.getElementById("getNewUser").addEventListener("click", function(event){
    console.log('triggered')
    getRandUser();
    var num_max = 20; 
    getRandTxt(Math.floor((Math.random() * num_max) + 1));

});



/* getRandTxt returns random activities for a given
  input number */
function getRandTxt(NUM){
  var url = "http://www.boredapi.com/api/activity/";
  for(let i = 0; i < NUM;i++){
    fetch(url).then(function(response) {
      //console.log(response);
      //  	 console.log(response.json());

  	 return response.json();
    })
    .then(function(json) {
    	//console.log(json);
    	  //console.log(json.slip.advice);
    	  console.log(json);
    	  var inner = '';
    	  inner +=  '<div class="item">'
    	        +  '<img class="left_box" src="'
    	        +  'images/Kangaroo.jpg'
    	        +  '" alt="profile pic"> '
              +  '<p class = "right_box">'
    	        +  json.activity
    	        +  '</p>'
    	        +  '</div>'

        if(i != 0){
          document.getElementById("posts").innerHTML += inner;
        }     
        else{
          document.getElementById("posts").innerHTML = inner;
        }
    })
    .catch(err => {
    	console.log(err);
    	return err;
    });
  }
}



/* Yeah..so getRandText_orig gives random advice,
    however the API appears to be naughty, so 
    I'm using something else*/
function getRandTxt_orig(NUM){
  var url = "https://api.adviceslip.com/advice";
  for(let i = 0; i < NUM;i++){
    fetch(url).then(function(response) {
  	 return response.json();
    })
    .then(function(json) {
    	//console.log(json);
    	  //console.log(json.slip.advice);
    	  var inner = '';
    	  inner +=  '<div class="item">'
    	        +  '<img class="left_box" src="'
    	        +  'images/Kangaroo.jpg'
    	        +  '" alt="profile pic"> '
              +  '<p class = "right_box">'
    	        +  json.slip.advice
    	        +  '</p>'
    	        +  '</div>'

        if(i != 0){
          document.getElementById("posts").innerHTML += inner;
        }     
        else{
          document.getElementById("posts").innerHTML = inner;
        }
    })
    .catch(err => {
    	console.log(err);
    	return err;
    });
  }
}


function profile_start(){
    getRandUser();
    var num_max = 20; 
    getRandTxt(Math.floor((Math.random() * num_max) + 1));
}

profile_start();
