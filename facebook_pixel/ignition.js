// Ignition One gave us two tags for apply completion - a conversion tag and an event tag.
// The tags will be different depending on whether we are tagging for UK or DE.

var userid = _satellite.getVar('Seeker ID');

if (_satellite.getVar('Server Name') == 'uk') {
	// This is the application conversion tag first
  (function() {
    var Conversion = {
      x2: '',
      x3: '',
      x4: userid
    },
        
        i=Conversion,
        d=document,
        u=encodeURIComponent,
        x=z='',
        j=d.createElement('script'),
        r=d.referrer,
        s=d.getElementsByTagName('script')[0];
    
    j.type='text/javascript';
    j.async=!0;r&&r.split(/[/:?]/)[3]!=d.location.hostname&&(i.ref=r);
    
    for(y in i)x+='&'+y+'='+u(i[y]);
    j.src='//dicecom.netmng.com/conv/?aid=4216&siclientid=100527&cpid=306469562'+x;
    s.parentNode.insertBefore(j,s);
  })();
  
  // Next we have the application event tag - 
  (function() {
    var Conversion = {
      x2: '',
      x3: '',
      x4: userid
    },
        
        i=Conversion,