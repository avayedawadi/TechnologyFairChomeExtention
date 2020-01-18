window.onload = function() {
    chrome.storage.sync.get(["master"], function (result) {
        var res = result["master"];
        var TotalString = "<tr><th>Recipie Title</th><th>Liked Recipie?</th><th>URL</th><th>Delete?</th></tr>";
        if (res != undefined) {
            var resArry = res.split("&&");
            // Array split into parts
            resArry.forEach(element => {
                var el = element.substring(1,element.length-1)
                el = el.split(",")
                if(el[1].includes("good")){
                    el[1] = "You though this recipe was good"
                }
                else{
                    el[1] = "You thought this recipe was bad"
                }
                TotalString+=("<tr><td>" + el[2].substring(1,el[2].length-1) + "</td><td>" + el[1] + "</td><td>"+ el[0].substring(1,el[0].length-1) + "</td><td><div class='remove' onclick='remove(\"" + el[2] + "\"'>X</div></td></tr>");            
            });
        }
        document.getElementById("managementTable").innerHTML = TotalString;
    });
    
    function remove(URL){
        chrome.storage.sync.get(["master"]), function (result){
            var res = result["master"];
            var resArry = res.split("&&");
        }
    }
}