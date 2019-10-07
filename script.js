
      
function getRandUser(){
    apikey = "NEAQ-BX5L-I9NK-WLUZ";
    const url = "https://randomuser.me/api/";
    fetch(url).then(function(response) {
            return response.json();
      }).then(function(json) {	
          console.log(json);
          console.log('here');
          var input = '';
         input +="<p>"+'<img src='+json.results[0].picture.medium+' alt="profile pic">'+"</p>";
         
          input += "<p>"
                    + "Name: " + json.results[0].name.title 
                            + ' ' + json.results[0].name.first
                            + ' ' + json.results[0].name.last
                    +"<br>"
                    + "age: " + json.results[0].dob.age
                    + "<br>"
                    + "cell: " + json.results[0].cell
                    + "<br>phone: " + json.results[0].phone
                    +"</p>";
            
            
            document.getElementById("userResults").innerHTML = input;
      });
      
      
    
}



document.getElementById("getNewUser").addEventListener("click", function(event){
    console.log('triggered')
    getRandUser();
});



function getRandTxt(){
  var url = "https://api.adviceslip.com/advice";
  fetch(url).then(function(response) {
	 return response.json();
  })
  .then(function(json) {
  	//console.log(json);
  	  console.log(json.slip.advice);
      var inner= '<p>' + json.slip.advice + '<p>';
      document.getElementById("motto").innerHTML += inner;
  })
  .catch(err => {
  	console.log(err);
  	return err;
  });
}


getRandUser()
getRandTxt()
getRandTxt()
getRandTxt()


/*
async function getRandUser(){
    console.log('calling');
    var result = await useRandData();
    console.log(result);
}

getRandUser();


/*click --> when the mouse is clicked*/
/* For current weather data?*/
/*
document.getElementById("user_info").addEventListener("click", function(event){
    event.preventDefault();
      const value = document.getElementById("newUserName").value;
      if (newUserName === "")
        return;
      console.log(value);
      const url = "https://randomuser.me/api/";
      fetch(url)
        .then(function(response) {
            return response.json();
      }).then(function(json) {	
          
      });
      */