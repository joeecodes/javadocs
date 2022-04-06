fetch('./dynamic/data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    for (var i = 0; i < data.length; i++) {
        document.getElementById("data").innerHTML +=
            "<br><a href='" + data[i].link + "'>" + data[i].title + "</a>";
    }
}).catch(function (err) {
    console.log(err)
})