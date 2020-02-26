chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.greeting == "good") {
      var goodNotif = {
        type: "basic",
        title: "Good Recipe",
        message: "You have previously saved this as a good recipe",
        iconUrl: "check.png"
      }
      chrome.notifications.create(goodNotif);
    } else {
      var badNotif = {
        type: "basic",
        title: "Bad Recipe",
        message: "You have previously saved this as a bad recipe",
        iconUrl: "x.png"
      }
      chrome.notifications.create(badNotif);
    }

    return true;
  });