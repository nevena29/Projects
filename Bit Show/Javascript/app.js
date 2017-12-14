

function popularShows() {
    var output = $(".row");
    var request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET",
        dataType: "json"



    })
    request.done(function(jsonMsg){
        console.log(jsonMsg);
    })
}
