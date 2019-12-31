window.onload = function() {
    url = window.location.href;
    
    var dataObj = {};
    dataObj[url] = "";

    chrome.storage.sync.get(dataObj, function(result) {
        var res = result[url];
        if(res == "good" || res == "bad") {
            alert("You through that this website was " + res)
        }
    });
}