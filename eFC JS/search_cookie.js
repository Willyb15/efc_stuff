function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/; domain=" + domainOfCookie;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

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

var url = new URL(document.location.href);
var searchbeta = url.searchParams.get("searchbeta");
var tmpdate = new Date().getTime();

//If the user's experience cookie was set BEFORE August 7, 2017, then delete their cookie. 
var xdate = "2017-08-07";
xdatestamp = new Date(xdate).getTime();
if (typeof(readCookie('js_dte')) != 'undefined' && readCookie('js_dte') < xdatestamp) {
	eraseCookie('jobsearch_version');
	eraseCookie('js_dte');
}

//Manually create the searchbeta if the user enters a searchbeta URL parameter
if (searchbeta == "on") {
	createCookie('jobsearch_version','new',2);
} else if (searchbeta == "off") {
	createCookie('jobsearch_version','old',2);
}

//If no Cookie exists, then create one. If one does exist, then extend its expiration
if (!readCookie('jobsearch_version')) {
	if (document.location.pathname.indexOf('/search') > -1) {
		window.searchExp = 'old';
		createCookie('jobsearch_version',window.searchExp,2)
		createCookie('js_dte',tmpdate,365);
	} else {
		var percentage_of_users_in_beta = 0;
		var rndnum = Math.floor((Math.random() * 100) + 1);
		if (rndnum < percentage_of_users_in_beta) {
			window.searchExp = 'new';
			createCookie('jobsearch_version',window.searchExp,365)
			createCookie('js_dte',tmpdate,365);
		} else {
			window.searchExp = 'old';
			createCookie('jobsearch_version',window.searchExp,2)
			createCookie('js_dte',tmpdate,365);
		}
	}
} else {
	if (readCookie('jobsearch_version') == 'old') {
		createCookie('jobsearch_version',readCookie('jobsearch_version'),2);
		createCookie('js_dte',tmpdate,365);
	} else if (readCookie('jobsearch_version') == 'new') {
		createCookie('jobsearch_version',readCookie('jobsearch_version'),365);
		createCookie('js_dte',tmpdate,365);
	}
}

var timeStamp = Date.now();
var randNum = Math.floor((Math.random() * 1000));
var order_id = timeStamp + randNum;
var pixelToLoad = "https://dicecom.netmng.com/conv/?aid=4055&cpid=306461670&nm_t=i&p1=[" + order_id + "]&p2=[1000]";
function loadMediaPixel(pixelToLoad){
	var img = document.createElement("img");
	img.src = pixelToLoad
  	var src = document.getElementsByTagName('body')[0]
	src.appendChild(img);
}






