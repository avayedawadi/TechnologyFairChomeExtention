window.onload = function() {
    chrome.storage.sync.get(["master"], function (result) {
        var res = result["master"];
        if (res != undefined) {
            var resArry = res.split("&&");
            // Array split into parts
            var TotalString = "<tr><th>Recipie Title</th><th>Liked Recipie?</th><th>URL</th><th>Delete?</th></tr>";
            
            resArry.forEach(element => {
                var el = element.substring(1,element.length-1)
                el = el.split(",")
                TotalString+=("<tr><td>" + el[2].substring(1,el[2].length-1) + "</td><td>" + el[1] + "</td><td>"+ el[0] + "</td><td>Germany</td></tr>");            });
            
            document.getElementById("managementTable").innerHTML = TotalString;
        }
    });
}