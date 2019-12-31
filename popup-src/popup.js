window.onload = function(){ 
    document.getElementById("badRecipie").onclick = function () {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            // Get the name of the url
            url = tabs[0].url;

            // Set the object to url : "bad"
            var dataObj = {};
            dataObj[url] = "bad";

            // Drop the storage cookie
            chrome.storage.sync.set(dataObj, function(){});
        });
        
    };
    
    document.getElementById("goodRecipie").onclick = function () {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            // Get the name of the url
            url = tabs[0].url;

            // Set the object to url : "good"
            var dataObj = {};
            dataObj[url] = "good";

            // Drop the storage cookie
            chrome.storage.sync.set(dataObj, function(){});
        }); 
    };
};

/*  
chrome.storage.sync.set(dataObj, function(){});

chrome.storage.sync.get(dataObj, function(result) {
    console.log('Value currently is ' + result[url]);
});
*/
