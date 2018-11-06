//Set Universal Variables 
var ckuserid = _satellite.getVar('Seeker ID');
var dtpjobid = _satellite.getVar('Jobid');
var seekerID = _satellite.getVar("Seeker Number");
var diceid = _satellite.getVar('Dice ID')
var server = _satellite.getVar('Server Name');
var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";

var rndm = Math.random() + ""; // unique to apps
var lrgrdm = Math.round(rndm * 10000000000000); // unique to apps

function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); //Make a script DOM node
    script.src = url; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

//Criteo
if (server == "uk") {
  $.getScript("//static.criteo.net/js/ld/ld.js");
    window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: 15200 },
    { event: "setEmail", email: ckuserid },
    { event: "setSiteType", type: deviceType },
    { event: "trackTransaction" , id: diceid + ':' + dtpjobid, 
            item: [ { 
                id: diceid + ':' + dtpjobid, 
                quantity: "1" 
            } ] 
        } 
    );
} else if (server == "de") {
  $.getScript("//static.criteo.net/js/ld/ld.js");
    window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: 14612}, 
    { event: "setEmail", email: ckuserid },
    { event: "setSiteType", type: deviceType },
        { event: "trackTransaction" , id: diceid + ':' + dtpjobid, 
            item: [ { 
                id: diceid + ':' + dtpjobid, 
                quantity: "1" 
            } ] 
        } 
    );
} else if (server == "www") {
  $.getScript("//static.criteo.net/js/ld/ld.js");
    window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: 17670}, 
    { event: "setEmail", email: ckuserid },
    { event: "setSiteType", type: deviceType },
        { event: "trackTransaction" , id: diceid + ':' + dtpjobid, 
            item: [ { 
                id: diceid + ':' + dtpjobid, 
                quantity: "1" 
            } ] 
        } 
    );
};

//Quantcast
var _qevents = _qevents || [];
var prot = "https://secure";
if (document.location.protocol == "http:") {prot = "http://edge"};
dynamicallyLoadScript(prot + ".quantserve.com/quant.js");

if (server == 'www') {
    _qevents.push(
        {qacct:"p-47J7rwq_VoNXI",
         labels:"_fp.event.Application Confirmation",
         orderid: dtpjobid + "-" + seekerID,
         event:"refresh"}
    );
} else if (server == 'uk') {
        _qevents.push(
        {qacct:"p-zD-RbMTJ_exp7",
         labels:"_fp.event.Application Confirmation",
         orderid: dtpjobid + "-" + seekerID,
         event:"refresh"}
    );

} else if (server == 'de') {
    _qevents.push(
        {qacct:"p-zD-RbMTJ_exp7",
         labels:"_fp.event.Application Confirmation",
         orderid: dtpjobid + "-" + seekerID,
         event:"refresh"}
    );
}
