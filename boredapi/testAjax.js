async function testFetchAsync() {
    try {
        let response = await fetch('http://www.boredapi.com/api/activity');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        document.body.innerHTML += "We got it: " + json.activity;
    } catch (error) {
        document.body.innerHTML += "We failed with: " + error;
    }
}

testFetchAsync();


/*
function testFetch(){
    fetch('http://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => document.body.innerHTML += data.activity)
        .catch(error => console.error("Fetch error:", error));
    }
testFetch()

/*
    //http://www.boredapi.com/api/activity
    //https://httpstat.us/404
function testAjax() {
    var xhr = new XMLHttpRequest();
    var url = 'http://www.boredapi.com/api/activity';
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.body.innerHTML += "</br>JSON came: " + xhr.responseText;
        }
    };

    xhr.send();
}