<script>
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/; domain=.efinancialcareers.com";
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
//Search Experience Cookie
var searchbeta = url.searchParams.get("searchbeta");

//HomePage Cookie
var homepage_beta = url.searchParams.get("homepage_beta");
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
</script>

<script type=text/javascript>








var sub = window.location.host.split('.')[0]
if (sub == "uk") {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    iframesource = 'https://8085935.fls.doubleclick.net/activityi;src=8085935;type=dicea0;cat=dicea0;u1=[Job Type];u2=[Company];u3=[Contract Type];u4=[Job Location];u5=[Applicant Location];u6=[Applicant Type];u7=[Keyword Search];u8=[Exclude Search];u9=[Last Updated Data];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"';
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = iframesource;
    document.body.appendChild(iframe);
}







// Start of DoubleClick Floodlight Tag: Please do not remove
// Activity name of this tag: Dice - Unique Application (2016)
// URL of the webpage where the tag is expected to be placed: https://www.dice.com/job/apply-with-dice/apply.html#/similarJobs
// This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
// Creation Date: 11/02/2016
// End of DoubleClick Floodlight Tag: Please do not remove




<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: Dice - Unique Application (2016)
URL of the webpage where the tag is expected to be placed: https://www.dice.com/job/apply-with-dice/apply.html#/similarJobs
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 11/02/2016
-->
<script type="text/javascript">
var axel = Math.random() + "";
var a = axel * 10000000000000;
document.write('<iframe src="https://3240192.fls.doubleclick.net/activityi;src=3240192;type=uniqu0;cat=dice-0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script>
<noscript>
<iframe src="https://3240192.fls.doubleclick.net/activityi;src=3240192;type=uniqu0;cat=dice-0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->









// Start of DoubleClick Floodlight Tag: Please do not remove
// Activity name of this tag: Dice - Unique Application (2016)
// URL of the webpage where the tag is expected to be placed: https://www.dice.com/job/apply-with-dice/apply.html#/similarJobs
// This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
// Creation Date: 11/02/2016
// Modified Date: 09/22/2017

var axel = Math.random() + "";
var a = axel * 10000000000000;
iframesource = 'https://3240192.fls.doubleclick.net/activityi;src=3240192;type=uniqu0;cat=dice-0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none';
var iframe = document.createElement('iframe');
iframe.style.display = "none";
iframe.src = iframesource;
document.body.appendChild(iframe);
// End of DoubleClick Floodlight Tag: Please do not remove



var sub = window.location.host.split('.')[0]
if (sub == "uk") {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    iframesource = 'https://8085935.fls.doubleclick.net/activityi;src=8085935;type=dicea0;cat=dicea0;u1=[Job Type];u2=[Company];u3=[Contract Type];u4=[Job Location];u5=[Applicant Location];u6=[Applicant Type];u7=[Keyword Search];u8=[Exclude Search];u9=[Last Updated Data];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?"';
    var iframe = document.createElement('iframe');
    iframe.setAttribute('height','1');
		iframe.setAttribute('width','1');
		iframe.setAttribute('Border','0');
    iframe.style.display = "none";
    iframe.src = iframesource;
    document.body.appendChild(iframe);
}



var axel = Math.random() + "";
var a = axel * 10000000000000;
iframesource = 'https://3240192.fls.doubleclick.net/activityi;src=3240192;type=uniqu0;cat=dice-0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=' + a + '?';
var iframe = document.createElement('iframe');
iframe.setAttribute('height','1');
iframe.setAttribute('width','1');
iframe.setAttribute('Border','0');
iframe.style.display = "none";
iframe.src = iframesource;
document.body.appendChild(iframe);
// End of DoubleClick Floodlight Tag: Please do not remove


// new code for aws 


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
    //Logic to set domain equal to what the "load balancer" sets (remove the www)
    var hostname = window.location.hostname;
    var sliceIndex = (hostname.indexOf("pilotaws") > -1) ? 12:3;
    //console.log(sliceIndex);
    var domainOfCookie = hostname.slice(sliceIndex);
    console.log(domainOfCookie)
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















function createCookie(name,value,days) {
    var domainOfCookie;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    //Logic to set domain equal to what the "load balancer" sets (remove the www)
    var indexToSlice = window.location.hostname.indexOf(".");
    var hostnameOfCookie = window.location.hostname;
    if( hostnameOfCookie.indexOf("pilotaws") > -1){
        domainOfCookie = window.location.hostname.slice(12)
    }else{
        domainOfCookie = window.location.hostname.slice(hostnameOfCookie);
    }
    document.cookie = name+"="+value+expires+"; path=/; domain=" + domainOfCookie;
}




function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    //Logic to set domain equal to what the "load balancer" sets (remove the www)
    var hostname = window.location.hostname;
    var sliceIndex = window.location.hostname.indexOf(".")
    if (hostname.indexOf("pilotaws") > -1){
        sliceIndex = 12;
    }
    var domainOfCookie = hostname.slice(sliceIndex);
    console.log(domainOfCookie)
    document.cookie = name+"="+value+expires+"; path=/; domain=" + domainOfCookie;
}
//Set URL + Canonical meta value
var URL = window.location.href.toLowerCase();
var canURL = $('#canonical')[0].href.toLowerCase();

//Check DJV from URL or Canonical
if(URL.includes("it-job") || URL.includes("sap-job")){
    return true;
    //console.log("fired_1")
}else if(URL.includes("mode=advertview")){
    return true;
    //console.log("fired_2")
}else if(canURL != undefined){
    if(canURL.includes("it-job") || canURL.includes("sap-job")){
    return true;
    //console.log("fired_3")
    }
}




//Define cookie methods - Read + Create + Erase 
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
    var tmphost = document.location.host;
    var cookiedomain = "." + tmphost;
    if (tmphost.indexOf('.dice.com') > -1) {
        cookiedomain = '.dice.com'
    }

    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/; domain=" + cookiedomain;
}

//Declare variables
var sessionVar;
var checkUsrID = readCookie("SKR_ID");
var checkPeopleId = window.peopleId;
var checkDTMcookie = readCookie("dtm_session_id");
var tmpDate = new Date().getTime();
var randNum = (tmpDate) + Math.floor(Math.random() *100);


//Check for a user ID. Create if one doesn't exist 
if(checkPeopleId != undefined){
    sessionVar = checkPeopleId;
}else if(checkUsrID != null){
    sessionVar = checkUsrID;
}else if(checkDTMcookie != null){
   sessionVar = checkDTMcookie;
}else{
   createCookie('dtm_session_id',randNum,365);
   sessionVar = randNum;
}
return sessionVar;





x = ssdl.searchObj.jobs

for(var i=0; i<x.length; i++){
    console.log(x[i].job_id);
}














































