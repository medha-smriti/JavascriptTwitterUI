const onWindowLoaded = () => {
    console.log('window loaded');
}

window.onload = onWindowLoaded;

function loadAllTweets() {
    try {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8080/getUserTimelineTweets', true);
        request.onload = function () {
            document.getElementById('col3').appendChild(this.responseText);
            console.log(this.response);
        };
        request.send();
    }
    catch (err) {
        console.log(err);
    }
}

function  createPost() {

    var message = prompt("Enter the tweet");
    try {
        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:8080/tweet', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        request.onload = function () {
            console.log("Successful Tweet");
        };
        request.send(message);
    }
    catch (err) {
        console.log(err);
    }
}


function  searchTweet() {
    try {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8080/searchTweets', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        request.onload = function () {
            document.getElementById('col3').appendChild(this.responseText);
            console.log(this.response);
        };
        //var text = document.getElementById('searchTweets')
        form.input.value;
        request.send(text.value);
    }
    catch (err) {
        console.log(err);
    }
}