// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      
    
  
        // send messge
        chrome.runtime.sendMessage({'title': window.title});
      }
    
  );