chrome.tabs.executeScript(null, {file: "thirdParty/jquery.min.js"}, function(){
  chrome.tabs.executeScript(null, {file: "thirdParty/tracking.min.js"}, function(){
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  });
});
