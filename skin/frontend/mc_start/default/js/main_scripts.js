var j = jQuery.noConflict();



j(document).ready(function(){

  j(".header-left input[type=text]").click(function(){
    var form_val = j(this).val();
    j(this).val("").addClass("focus");
  });
  
  j(".header-left input[type=text]").blur(function(){
    var start_val = j(this).attr("value");
    var this_val = j(this).val()
    if(this_val == ""){
      j(this).val(start_val).removeAttr("class");
      
    }
  });
  
});