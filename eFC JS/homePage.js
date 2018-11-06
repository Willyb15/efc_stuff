function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    //Logic to set domain equal to what the "load balancer" sets
    var hostnameOfCookie = window.location.hostname.indexOf(".");
    var domainOfCookie = window.location.hostname.slice(hostnameOfCookie); 
    document.cookie = name+"="+value+expires+"; path=/; domain=" + domainOfCookie;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


var url = new URL(document.location.href);
var homepage_beta = url.searchParams.get("homepage_beta");
var tmpdate = new Date().getTime();

//Manually create the searchbeta if the user enters a homepage_beta URL parameter
if (homepage_beta == "on") {
	createCookie('homepage_version','new',2);
} else if (homepage_beta == "off") {
	createCookie('homepage_version','old',2);
}

//If the user's experience cookie was set BEFORE August 7, 2017, then delete their cookie. 
var xdate = "2017-08-21";
xdatestamp = new Date(xdate).getTime();
if (typeof(readCookie('hp_dte')) != 'undefined' && readCookie('hp_dte') < xdatestamp) {
	eraseCookie('homepage_version');
	eraseCookie('hp_dte');
}


//If no Cookie exists, then create one. If one does exist, then extend its expiration
if (!readCookie('homepage_version')) {
	if (document.location.pathname == "/") {
		window.homepageExp = 'old';
		createCookie('homepage_version',window.homepageExp,2)
		createCookie('hp_dte',tmpdate,365);
	} else {
		var percentage_of_users_in_beta = 2;
		var rndnum = Math.floor((Math.random() * 100) + 1);
		if (rndnum < percentage_of_users_in_beta) {
			window.homepageExp = 'new';
			createCookie('homepage_version',window.homepageExp,365)
			createCookie('hp_dte',tmpdate,365);
		} else {
			window.homepageExp = 'old';
			createCookie('homepage_version',window.homepageExp,2)
			createCookie('hp_dte',tmpdate,365);
		}
	}
}else {
	if (readCookie('homepage_version') == 'old') {
		createCookie('homepage_version',readCookie('homepage_version'),2);
		createCookie('hp_dte',tmpdate,365);
	} else if (readCookie('homepage_version') == 'new') {
		createCookie('homepage_version',readCookie('homepage_version'),365);
		createCookie('hp_dte',tmpdate,365);
	}
}