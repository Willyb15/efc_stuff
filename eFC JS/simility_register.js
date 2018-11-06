$.getScript('https://cdn.simility.com/b.js', function(){   
  	
    var sc_user_reg = {
      "customer_id": "efinancialcareers",
      "session_id": "{{Javascript - Session ID}}",
      "transaction_info": [
        
        {
          "id": "{{DL - LOGGED_IN_USER_ID}}", // Will be email of user if backend doesn't generate an identifier
          "entity": "user",
          "fields": {
            "decision": "Approved",
            "sessionid": "{{Javascript - Session ID}}",
            "email": "{{Javascript - Registration User Email}}"
          }
        }
      ]

    }; 

    $.get("/server/rest/decision/efinancialcareers/user?id="+"{{DL - LOGGED_IN_USER_ID}}", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });

  	//window.useremail = {{Javascript - Registration User Email}};
  	var ss = new SimilityScript(sc_user_reg); 
  	ss.execute(); 
  	//eraseCookie("user_email");
});



function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }



        function eraseCookie(name) {
        createCookie(name,"",-1);


var sc = {
  "customer_id": "efinancialcareers",
  "session_id": "{{Javascript - Session ID}}",
  "transaction_info": [{
    "id": "{{DL - LOGGED_IN_USER_ID}}", // Will be email of user if backend doesn't generate an identifier
    "entity": "user",
    "fields": {
      "sessionid": "{{Javascript - Session ID}}",
      "email": "{{Javascript - Registration User Email}}"
       }
    }]
  };

    //window.useremail = {{Javascript - Registration User Email}};
    console.log(sc, "this is the SC object");
    var ss = new SimilityScript(sc); 
    ss.execute(); 







var sc = {
  "customer_id": "efinancialcareers",
  "session_id": "{{Javascript - Session ID}}",
  "transaction_info": [
    {
      "id": "{{DL - LOGGED_IN_USER_ID}}", // Will be email of user if backend doesn't generate an         identifier
      "entity": "user",
      "fields": {
        "sessionid": "{{Javascript - Session ID}}",
        "email": "{{Javascript - Registration User Email}}"
        }
      }
    ]
  };
