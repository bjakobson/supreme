<<<<<<< HEAD

$( document ).ready(function() {

    if (window.location.href.indexOf('/shop') > 0) {

    
      var i = setInterval(next(), 300)
    //var s = setTimeout(function() {
     //  location.reload();
   //}, 400);        
   var timer = function() {
     window.location.reload(true);
   };
   var timeout = setTimeout(timer, 500);  

 

  function next(){

    var pname = $(".protect").text()
    $(".free_shipping").text("Loading next item..")
      if(pname.includes("Valentine")){
        clearTimeout(timeout);

        window.clearInterval(i);
        document.getElementById('s').selectedIndex=1;
        
        clearTimeout(timeout);



        $('#cart-addf').submit()
        

        window.open("https://www.supremenewyork.com/shop/cart")



      }else{
          
        
        
        $('.next')[0].click();

      }
      clearTimeout(timeout);

    } 

  }

     


      if (window.location.href.indexOf('/checkout') > 0) {
        jQuery(document).ready(function(){

          clearTimeout(timeout);

          


          

            //filler
            document.getElementById("order_billing_name").value = "REPLACE_ME"
            document.getElementById("order_email").value = "REPLACE_ME@GMAIL.COM"
            document.getElementById("order_tel").value = "00000000"
            document.getElementById("bo").value = "REPLACE THIS ADDRESS"
            document.getElementById("order_billing_zip").value = "REPLACE THIS ZIPCODE"
            document.getElementById("order_billing_city").value = "REPLACE THIS CITY"
            document.getElementById('order_billing_state').selectedIndex=20;//replace 20 with state number (0=1)
            document.getElementById("rnsnckrn").value = "REPLACE THIS CREDIT CARD NUMBER"
            document.getElementById("orcer").value = "REPLACE THIS CREDIT CARD CVV"
            document.getElementById('credit_card_month').selectedIndex=1;
            document.getElementById('credit_card_year').selectedIndex=3;//replace 3 with card value (3=2022)
            $('#order_terms').attr('checked',true)


            
        });
    

  } 
});


//          //"matches": ["https://www.supremenewyork.com/checkout", "https://www.supremenewyork.com/shop/jackets/pk2tbsagx/z60yvnd1f", "https://www.supremenewyork.com/shop/jackets/yqaoeynuh", "https://www.supremenewyork.com/shop/jackets/na6obt059", "https://www.supremenewyork.com/shop/jackets/rtzg8fjol", "https://www.supremenewyork.com/shop/jackets/l7zb3rwls", "https://www.supremenewyork.com/shop/shirts/nrla6isyw/rtkhre1sx"],
=======
document.getElementById("order_billing_name").value = "Brandon Jakobson"
document.getElementById("order_email").value = "brandonjakobson@GMAIL.COM"
document.getElementById("order_tel").value = "4256060298"
document.getElementById("bo").value = "3403 219th PL SE"
document.getElementById("order_billing_zip").value = "98075"
document.getElementById("order_billing_city").value = "Sammamish"
document.getElementById('order_billing_state').selectedIndex=55;//replace 20 with state number (0=1)
document.getElementById("rnsnckrn").value = "4701 3203 2281 5966"
//ocument.getElementById("orcer").value = "REPLACE THIS CREDIT CARD CVV"
document.getElementById('credit_card_month').selectedIndex=4;
document.getElementById('credit_card_year').selectedIndex=5;//replace 3 with card value (3=2022)
//$('#order_terms').attr('checked',true)







>>>>>>> 5bfd66cc6bd9b0b750e80c3820ba6c27e1065b64
