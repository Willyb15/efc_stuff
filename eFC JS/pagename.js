//Build up a pagename from componenets
var componentName = "";
var subdomain = window.location.host.split('.')[0];

if (typeof(ssdl)!= 'undefined') {
	if (typeof(ssdl.page)!='undefined') {
			if (typeof(ssdl.page.channel) != 'undefined' && ssdl.page.channel.length > 0) {
			componentName += subdomain;
			componentName += ssdl.page.channel;
			if (typeof(ssdl.page.section) != 'undefined' && ssdl.page.section.length > 0) {
				componentName += ssdl.page.section;
			}
			if (typeof(ssdl.page.subsection) != 'undefined' && ssdl.page.subsection.length > 0) {
				componentName += ssdl.page.subsection;
			}
			if (typeof(ssdl.page.pagetitle) != 'undefined' && ssdl.page.pagetitle.length > 0) {
				componentName += ssdl.page.pagetitle;
			}
			if (typeof(ssdl.page.tab) != 'undefined' && ssdl.page.tab.length > 0) {
				componentName += ssdl.page.tab;
			}
		}	
	}	
}

//Build up a pagename from the url
var pathparts = window.location.pathname;
pathparts = pathparts.replace("/","-");
var pathname = subdomain + pathparts;

//Build up a use of the ssdl.page.pageName variable
pathname


if (typeof(ssdlname) != 'undefined' && ssdlname.length > 0) {
	return ssdlname;
} else if (componentName.length > 0) {
	return componentName;
} else if (_satellite.getVar("Dice Pagenames")) {
	return _satellite.getVar("Dice Pagenames"); //This is using the metatag
} else {
	return pathname;
}