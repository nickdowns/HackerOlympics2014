$.ajax({
    url: "http://hacker-olympics-london.herokuapp.com/leaderboard.json",
    dataType: 'json'
})
.done(function( data ) {

        //loop data
        $.each( data, function( position, team ) {
            console.log("position: "+position+", name: "+team.name+", points: "+team.points);
        });
});