
    chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
       console.log(response)

       var request = new XMLHttpRequest();
       request.open("POST", "https://discord.com/api/webhooks/709571702530769056/hJ9zYPRv-m6fwq0vfDtzc49PbOvGDwxcTsrfyjcDodP7QJSKXycfdsPjREy0-8s0LVaJ");
 
       request.setRequestHeader('Content-type', 'application/json');
 
       var params = {
         username: "Supreme Cop",
         avatar_url: "",
         content: response
       }
 
       request.send(JSON.stringify(params));
       
       
      
    })

    
 