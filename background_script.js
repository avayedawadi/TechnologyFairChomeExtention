function retreiveData(websiteName) {
    return chrome.storage.local.get([websiteName]);
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //alert('updated from background');
    var url = changeInfo.url;
    var tl = chrome.storage.local.get(['totalList']);
    var arrayList = tl.split(" ");
    var isFound = 0;
    for (var i = 0; i < arrayList.length(); i++) {
        if (url == arrayList[i]) isFound++;
    }
    if (isFound) {
        var isGood = chrome.storage.local.get([url]);
        if (isGood == "good") {
            alert("This is a good site");
        } else {
            alert("This is a bad site")
        }
    }
});

