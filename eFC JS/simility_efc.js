  <script>
    var profilets = new Date().getTime();
    var user_ts = {{DL - LOGGED_IN_USER_ID}} + "_" + profilets;

       var similityContext = {
"customer_id": "efinancialcareers",
"session_id": "{{Javascript - Session ID}}",
"transaction_info": [
{
"id": user_ts, //user1@gmail.com_1491997828895
"entity": "job_application",
"fields": {
"user_id": "{{DL - LOGGED_IN_USER_ID}}",
"session_id": "{{Javascript - Session ID}}",
"job_id": "{{DL - APPLIED_JOB_ID}}",
"job_is_third_party": false
}
}
]
      };
      </script>
      <script type="application/javascript" src="https://cdn.simility.com/b.js"></script>
