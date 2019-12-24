document.getElementById("goodRecipie").onclick = function() {
    addRecipie(chrome.websiteUrl.toString(), 'good')
    alert("Added to List!")
}

document.getElementById("badRecepie").onclick = function() {
    addRecipie(chrome.websiteUrl.toString(), 'bad');
    alert("Added to List!")
}


function saveData(websiteName, status) {
    chrome.storage.local.set({websiteName: status});    
} 

function retreiveData(websiteName) {
    return chrome.storage.local.get([websiteName]);
}

function addRecipie(websiteUrl, status) {
    saveData(websiteName, status);
    saveData('totalList', (retreiveData('totalList') + " " + websiteName));
}