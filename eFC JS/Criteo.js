//Internal Apply - Criteo
var ckuserid = _satellite.getVar('Seeker ID');
var seekerID = _satellite.getVar('Seeker Number');
var dtpjobid = _satellite.getVar('Jobid');
var diceid = _satellite.getVar('Dice ID')
var server = _satellite.getVar('Server Name');
var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";

if ( server == 'www') {
	$.getScript("//static.criteo.net/js/ld/ld.js");
 	window.criteo_q = window.criteo_q || [];
 	window.criteo_q.push( 
		{ event: "setAccount", account: 17670 },
		{ event: "setHashedEmail", email: seekerID },
		{ event: "setSiteType", type: deviceType },
		{ event: "trackTransaction" , id: diceid + ':' + dtpjobid, 
			item: [ { 
				id: diceid + ':' + dtpjobid, 
				quantity: "1" 
			} ] 
		} 
	);
} else if ( server == 'uk') {
  	$.getScript("//static.criteo.net/js/ld/ld.js");
  	window.criteo_q = window.criteo_q || [];
  	window.criteo_q.push( 
		{ event: "setAccount", account: 15200 },
		{ event: "setHashedEmail", email: seekerID },
		{ event: "setSiteType", type: deviceType },
    	{ event: "trackTransaction" , id: diceid + ':' + dtpjobid, 
			item: [ { 
				id: diceid + ':' + dtpjobid, 
				quantity: "1" 
			} ] 
		} 
	);
  
} else if ( server == 'de') {
	$.getScript("//static.criteo.net/js/ld/ld.js");
  	window.criteo_q = window.criteo_q || [];
  	window.criteo_q.push( 
	    { event: "setAccount", account: 14612 },
	    { event: "setHashedEmail", email: seekerID },
		{ event: "setSiteType", type: deviceType },
    	{ event: "trackTransaction" , id: diceid + ':' + dtpjobid, 
			item: [ { 
				id: diceid + ':' + dtpjobid, 
				quantity: "1" 
			} ] 
		} 
	);
}