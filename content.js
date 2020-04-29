
$( document ).ready(function() {
  ReadfromMemory()
  WritetoMemory()


ProductcolorRequest()

function ProductcolorRequest(){
  $("#submit_req").click(function(){
    document.getElementById('submit_req').addEventListener('click', chrome.tabs.reload());
    chrome.storage.local.set({'product': $("#productreq").val()}, function() {
    });
    chrome.storage.local.set({'color': $("#colorreq").val()}, function() {
    });
    chrome.storage.local.set({'type': $("#type").val()}, function() {
    });
    chrome.storage.local.get(['type'], function(result) {
    
      var r2 = "https://www.supremenewyork.com/shop/all/"+result.type
      chrome.tabs.create({ url: r2 });

    });





    
    
});
}






  function ReadfromMemory(){

 


   
    //name read
      chrome.storage.local.get(['name'], function(result) {
      document.getElementById("order_billing_name").value = result.name
    });
    //email read
    chrome.storage.local.get(['email'], function(result) {
      document.getElementById("order_email").value = result.email
    });
  //phone read
    chrome.storage.local.get(['phone'], function(result) {
      document.getElementById("order_tel").value = result.phone
    });
  //address read
    chrome.storage.local.get(['address'], function(result) {
      document.getElementById("bo").value = result.address
    });
  //zip read
    chrome.storage.local.get(['zip'], function(result) {
      document.getElementById("order_billing_zip").value = result.zip
    });
  //city read
  chrome.storage.local.get(['city'], function(result) {
    document.getElementById("order_billing_city").value = result.city
  });
  //state read
  chrome.storage.local.get(['state'], function(result) {
    document.getElementById("order_billing_state").value = result.state
  });
  //country read
  chrome.storage.local.get(['country'], function(result) {
    document.getElementById("order_billing_country").value = result.country
  });
  //credit card read
  chrome.storage.local.get(['ccnum'], function(result) {
    document.getElementById("rnsnckrn").value = result.ccnum
  });
  //exp mon read
  chrome.storage.local.get(['expmon'], function(result) {
    document.getElementById("credit_card_month").value = result.expmon
  });
  //exp year read
  chrome.storage.local.get(['expyear'], function(result) {
    document.getElementById("credit_card_year").value = result.expyear
  });
  //cvv read
  chrome.storage.local.get(['cvv'], function(result) {
    document.getElementById("orcer").value = result.cvv
  });
}


function WritetoMemory(){
  $('#btn').click(function(){

      //reload page once save data is hit
      document.getElementById('btn').addEventListener('click', chrome.tabs.reload());
      //alert("saving")
     
     
  //reload the page on a timer every 1/100th of a second
   
   // chrome.storage.local.set({'product': }, function() {
  //   });

  //  chrome.storage.local.set({'color': }, function(c) {
  //   });
    
  //name write
      chrome.storage.local.set({'name': document.getElementById("order_billing_name").value = $("#order_billing_name").val()}, function() {
      });
  //email write
      chrome.storage.local.set({'email': document.getElementById("order_email").value = $("#order_email").val()}, function() {
      });
  //phone write
      chrome.storage.local.set({'phone': document.getElementById("order_tel").value = $("#order_tel").val()}, function() {
      });
  //address write
      chrome.storage.local.set({'address': document.getElementById("bo").value = $("#bo").val()}, function() {
      });
  //zip write
      chrome.storage.local.set({'zip': document.getElementById("order_billing_zip").value = $("#order_billing_zip").val()}, function() {
      });
  //city write
      chrome.storage.local.set({'city': document.getElementById("order_billing_city").value = $("#order_billing_city").val()}, function() {
      });
  //state write
      chrome.storage.local.set({'state': document.getElementById("order_billing_state").value = $("#order_billing_state").val()}, function() {
      });
  //country write
      chrome.storage.local.set({'country': document.getElementById("order_billing_country").value = $("#order_billing_country").val()}, function() {
      });  
  //credit card write
      chrome.storage.local.set({'ccnum': document.getElementById("rnsnckrn").value = $("#rnsnckrn").val()}, function() {
      }); 
  //exp month write
      chrome.storage.local.set({'expmon': document.getElementById("credit_card_month").value = $("#credit_card_month").val()}, function() {
      });
  //exp year write
      chrome.storage.local.set({'expyear': document.getElementById("credit_card_year").value = $("#credit_card_year").val()}, function() {
      });
  //cvv write
      chrome.storage.local.set({'cvv': document.getElementById("orcer").value = $("#orcer").val()}, function() {
      }); 



  });
}


//clear all data
$("#clear").click(function(){
  document.getElementById('submit_req').addEventListener('click', chrome.tabs.reload());

  chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
});

})

  //call checkout function
  checkout()
  
  //only applies if URL has /shop in it
    if (window.location.href.indexOf('/shop') > 0) {

  //loop function next every 1/100th of a second

  var timer;
  var i;
    timer = setTimeout(function(){
      window.location.reload(1);
        }, 100);
    
      i = setInterval(next(), 100);


      setTimeout(function () {
        window.location.href = $("a.name-link").attr('href');
    }, 50);
  
    
 

  function next(){
    chrome.storage.local.get(['product', 'color'], function(result) {

        //window.clearInterval(i);
        //window.clearTimeout(timer);

    
        //define the current color
        var color = $("button.selected").attr('data-style-name');
        //define the current name
        var pname = $(".protect").text()

      
        
        $(".free_shipping").text("Loading next item..")
          if(pname.includes(result.product) && color == result.color){

            //clear timeouts
            window.clearInterval(i);
            window.clearTimeout(timer);
            //add to cart
            $('#cart-addf').submit()
            //launch new window to checkout
            var ti = setTimeout(launchwindow(), 500)
            //clear the timeout
            window.clearTimeout(ti)
            

            //if name is correct but color is not:
          }else if(pname.includes(result.product) && color != result.color){
            //move to next color
            $("button[data-style-name='"+result.color+"']").click()

            //if color is correct but name is not:
          }else {
            //move to next item
            $('.next')[0].click();

          }
        
      });
      
    } 

  }

     
  //go to checkout page
  function launchwindow(){
    window.open("https://www.supremenewyork.com/checkout")
  }

  //checkout filler
  function checkout(){
    //if (window.location.href.indexOf('/checkout') > 0) {
      
        $('#order_terms').attr('checked',true)

        //$("#checkout_form").submit()

    }

    
});


