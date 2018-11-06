$(document).ajaxSuccess(function( event, xhr, settings, ajaxData ) {
    var data = xhr.responseText;
  console.log(data, "this is the data...jon")
  	var jsonResponse; 
    try {
      jsonResponse = JSON.parse(data);
    } catch (err) {
      jsonResponse = err;
    }
  //Create Discussion
  console.log(jsonResponse, "this is the jsonResonse...Will")
  if (jsonResponse["form_name"] == "groupbundle_discussionform" && jsonResponse["redirect"] !== undefined) {
    _satellite.track("groupbundle_discussionform");
    _satellite.getVar("DS newDiscussionName");
  //Send Private Message
  } else if (jsonResponse["form_name"] == "groupbundle_groupform" && jsonResponse["redirect"] !== undefined) {
    _satellite.track("groupbundle_groupform");
    _satellite.getVar("DS newGroupName");
  //Send Private Message
  } else if (jsonResponse["form_name"] == "sharecare_privatemessagebundle_privatemessageform" && jsonResponse["redirect"] !== undefined) {
    _satellite.track("sharecare_privatemessagebundle_privatemessageform");
  //Submit journal--need to differentiate Submit vs. Save Draft
  } else if (jsonResponse["form_name"] == "sharecare_journalbundle_journalform" && jsonResponse["redirect"] !== undefined) {
    _satellite.track("sharecare_journalbundle_journalform");
  //Send hug from profile
  } else if (jsonResponse["form_name"] == "sharecare_hugbundle_hugform" && jsonResponse["redirect"] !== undefined) {
    _satellite.track("sharecare_hugbundle_hugform");
  }
});

$(document).ajaxSuccess(function(event,xhr,options){
  console.log("AJAX request successfully completed");
  console.log(event, "this is the event");
  console.log(xhr, "this is the xhr");
  console.log(options, "This is the options");
  var parseresponse;
  var jsonResponse;
  var subject;
  if(options.data != undefined){
    jsonResponse = options.data;
    console.log(jsonResponse, 'this is the response');
    try {
      parseResponse = JSON.parse(jsonResponse);
    } catch (err) {
      parseResponse = err;
    }
    subject = parseResponse.subject
    if(subject == "Activate your new job alert from Dice.com."){
      _satellite.track('Job Alert - Search Results')
    }
    console.log(parseResponse, "this is the parsed JSON");
  }
});