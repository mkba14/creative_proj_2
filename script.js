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

            document.getElementById("userResults").innerHTML = input;
            console.log("username, ", json.results[0].login.username)
            
            var num_max = 20;
            getRandTxt_orig(Math.floor((Math.random() * num_max) + 1),
                      json.results[0].login.username)
            return '"' + json.results[0].login.username + '"';
            
            
      });
      
      
    
}






/* getRandTxt returns random activities for a given
  input number */
function getRandTxt(NUM, text){
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
    	  
       var avatar_url = "https://api.adorable.io/avatars/90/"
                      + text +".png";
        console.log(avatar_url);
    	  inner +=  '<div class="item">'
    	        +  '<img class="left_box" src="'
    	        +  avatar_url
    	        +  '" alt="profile pic"> '
        inner += '<p class = "right_box">'
              + '<div class=" medium">'
    	        +  json.activity
    	        +  '</div>'
    	        +  '</p>'
    	        + '</div>'
    	        

        if(i != 0){
          document.getElementById("posts").innerHTML += inner;
        }     
        else{
          document.getElementById("posts").innerHTML = inner;
        }
        document.getElementById("icon").src=avatar_url;
    })
    .catch(err => {
    	console.log(err);
    	return err;
    });
  }
}






function getRandTxt_1(text){
  var url = "https://api.adviceslip.com/advice";
    fetch(url).then(function(response) {
  	 return response.json();
    })
    .then(function(json) {
    	//console.log(json);
    	  //console.log(json.slip.advice);
    	  
    	  if(shouldFilter(String(json.slip.advice)) === 1){
    	    getRandTxt_1(text);
    	  }
    	  var avatar_url = "https://api.adorable.io/avatars/90/"
                      + text +".png";
                      
    	  var inner = '';
    	 inner +=  '<div class="item">'
    	        +  '<img class="left_box" src="'
    	        +  avatar_url
    	        +  '" alt="profile pic"> '
        inner += '<p class = "right_box">'
              + '<div class=" medium">'
    	        +  json.slip.advice
    	        +  '</div>'
    	        +  '</p>'
    	        + '</div>'
            document.getElementById("icon").src="https://api.adorable.io/avatars/2000/"
                      + text +".png";

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



function getRandTxt_orig(NUM, text){
  document.getElementById("posts").innerHTML = "";
  for(let i = 0; i < NUM;i++){
    getRandTxt_1(text);
  }
}

function shouldFilter(text){

  if(text.indexOf('sex') !== -1){
    return 1;
  }
  else if(text.toLowerCase().indexOf('bastard') !== -1){
    return 1;
  }
  else if(text.toLowerCase().indexOf('hell') !== -1){
    return 1;
  }
  else if(text.toLowerCase().indexOf('shit') !== -1){
    return 1;
  }
  else if(text.toLowerCase().indexOf('fuck') !== -1){
    return 1;
  }
  else if(text.toLocaleLowerCase().indexOf('dick') !== -1){
    return 1;
  }
  
  else {
    return 0;
  }
  
}

document.getElementById("getNewUser").addEventListener("click", function(event){
    console.log('triggered')
    profile_start();

});



function profile_start(){
    getRandUser();
}
function updateBar(){
  randomNum("guroos", 1000);
  randomNum("followers", 10000);
  randomNum("following", 10000);
  randomNum("likes", 1000);
  randomNum("dislikes", 1000);
  /*
  document.getElementById("guroos").innerHTML= Math.floor(Math.random()*10000); //make it the number of posts
  document.getElementById("followers").innerHTML= Math.floor(Math.random()*10000);
  document.getElementById("following").innerHTML= Math.floor(Math.random()*10000);
  document.getElementById("likes").innerHTML = Math.floor(Math.random()*1000);
  document.getElementById("dislikes").innerHTML= Math.floor(Math.random()*1000);
  */
}

function randomNum(text, num){
  document.getElementById(text).innerHTML= Math.floor(Math.random()*num);

}
profile_start();
updateBar();
