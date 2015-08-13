var j = jQuery.noConflict();



j(document).ready(function(){
  j(".rounded-input input[type=text], .rounded-input input[type=search], .rounded-input input[type=email]").click(function(){
    var form_val = j(this).val();
    j(this).val("").addClass("focus");
  });
  
  j(".rounded-input input[type=text], .rounded-input input[type=search], .rounded-input input[type=email]").blur(function(){
    var start_val = j(this).attr("value");
    var this_val = j(this).val()
    if(this_val == ""){
      j(this).val(start_val).removeAttr("class");
      
    }
  });
  
  j(".configurable-swatch-list li, .configurable-swatch-list .swatch-label").removeAttr("style");  
  j(".configurable-swatch-list .has-image img").removeAttr("height").removeAttr("width");  
  
  j(".bag").hover(function(){
    //j(".mc-cart").fadeIn(1500);
    //setTimeout(function(){
      //j(".mc-cart").fadeOut(500);
    //}, 1000);
  },
  function(){
    //j(".mc-cart").fadeOut(500);
  }
  );
  
  
  //j(".configurable-swatch-list .li, .configurable-swatch-list .has-image img").removeAttr("style");  
  
});