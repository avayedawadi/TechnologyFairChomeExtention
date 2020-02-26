window.onload = function() {
    url = window.location.href;
    title = document.title;
    
    chrome.storage.sync.get(["master"], function(result) {
        var res = result["master"];
        // TODO: Parse the data and check to see if a judgement has been passed, or if there is a similar recipie

        // First figure out if a judgmenet has been passed already.
        if (res != undefined) {
            var resArry = res.split("&&");
            resArry.forEach(element => {
                if (element.includes(url)) {
                    if (element.includes("good")) {
                        // element good
                        chrome.extension.sendMessage({greeting: "good"}, function(response) {});
                    }
                    else {
                        // element bad
                        chrome.extension.sendMessage({greeting: "bad"}, function(response) {});
                    }
                }
            });
        }
    });
}

