$.ajax({
    url: "http://hacker-olympics-london.herokuapp.com/leaderboard.json",
    dataType: 'json'
})
.done(function( data ) {

        //loop data
        $.each( data, function( position, team ) {
            console.log("position: "+position+", name: "+team.name+", points: "+team.points);
            $( "#leaderboard" ).append( "<tr><td>"+position+"</td><td>"+team.name+"</td><td>"+team.points+"</td></tr>" );
        });
});