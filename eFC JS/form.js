
<script>
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
  document.cookie = name+"="+value+expires+"; path=/";
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function trackField(field, formName) {
  var fieldName = $(field).attr('name') || $(field).attr('id'); 
  var fieldValueLength = $(field)[0].value.length;
  //check to see if this form and field combination has been tracked yet
  if (typeof(window.formTrackFieldList) == 'undefined'){
    window.formTrackFieldList = [];
  }
  
  formFieldCombo = formName + '_' + fieldName;
  if (formTrackFieldList.indexOf(formFieldCombo) == -1 && fieldValueLength > 0) {
    //fire the field tracking beacon
    dataLayer.push({
      "event" : "trackFormField",
      "Form Name" : formName,
      "Field Name Completed" : fieldName
    });

    //Add the formFieldCombo to the Field List 
    formTrackFieldList.push(formFieldCombo);
  } 
}

function trackForm(form, formName) {
  $(form).attr('formName',formName);
  $(form).find('input').each(
    function(index) {
      var input = $(this);
      formName = $(this).parents('form').attr('formName');
      $(this).on('focus',function(){
        formName = $(this).parents('form').attr('formName');
        //check to see if this form has already been started by looking for the cookie. If not, fire the Form Start tracking beacon
        if (readCookie("FormTrack") != formName) {
          dataLayer.push({
            "event" : "trackFormStart",
            "Form Name" : formName
          });
          createCookie("FormTrack",formName);
        }
      })
      $(this).on('blur',function(){
        formName = $(this).parents('form').attr('formName');
        trackField(this,formName);
      })
    }
  );

  $(form).find('select').each(
    function(index,formName) {
      formName = $(this).parents('form').attr('formName');
      var input = $(this);
      $(this).on('change',function(){
        formName = $(this).parents('form').attr('formName');
        if (readCookie("FormTrack") != formName) {
          dataLayer.push({
            "event" : "trackFormStart",
            "Form Name" : formName
          });
          createCookie("FormTrack",formName);
        }
        trackField(this,formName);
      })
    }
  );

  $(form).find('textarea').each(
    function(index,formName) {
      formName = $(this).parents('form').attr('formName');
      
      var input = $(this);
      $(this).on('focus',function(){
        formName = $(this).parents('form').attr('formName');
      
        //check to see if this form has already been started by looking for the cookie. If not, fire the Form Start tracking beacon
        if (readCookie("FormTrack") != formName) {
          dataLayer.push({
            "event" : "trackFormStart",
            "Form Name" : formName
          });
          createCookie("FormTrack",formName);
        }
      })
      $(this).on('blur',function(){
        formName = $(this).parents('form').attr('formName');
        trackField(this,formName);
      })
    }
  );
}



</script>