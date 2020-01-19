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
                        //alert("Previously selected as good recipe");
                        chrome.extension.sendMessage({greeting: "good"}, function(response) {});
                        /*var goodNotif = {
                            type: "basic",
                            title: "Good Recipe",
                            message: "You have previously saved this as a good recipe",
                            iconUrl: "Sausage.jpg"
                        }
                        chrome.notifications.create(goodNotif);*/
                    }
                    else {
                        // element bad
                        chrome.extension.sendMessage({greeting: "good"}, function(response) {});
                        //alert("Previously selected as bad recipe");
                    }
                }
            });
        }
    });
}

