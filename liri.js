
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
require('dotenv').config();
var keys = require('./keys');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(
    keys.spotify
);



var argOne = process.argv[2];
//console.log(argOne)
var argTwo = process.argv.slice(3).join(" ");
//console.log(argTwo)

// Then run a request with axios to the OMDB API with the movie specified
//  axios.get("http://www.omdbapi.com/?t=remember  & y=& plot=short & apikey=trilogy").then(


/////////////////////////// check for MOVIE condition  //////////////////////
/////////////////////////// check for MOVIE condition  //////////////////////
/////////////////////////// check for MOVIE condition  //////////////////////

if (argOne === "movie-this") {
    // console.log('movie-this ive been called')

    var movieTitle = argTwo;

    // make it "Mr. Nobody" if the title is blank

    if (movieTitle === "") {
        argTwo = "Mr. Nobody"
    }

    axios.get("http://www.omdbapi.com/?t=" + argTwo + "&y=&plot=short&apikey=trilogy").then(

        function (response) {
            console.log("The movie's title is: " + response.data.Title);
            console.log("The movie's year of release is: " + response.data.Year);
            console.log("The movie's IMDB rating is: " + response.data.Rated[0]);
            console.log("The movie's Rotten Tomato's rating is: " + response.data.Rated[1]);
            console.log("The movie's country where it was produced is: " + response.data.Country);
            console.log("The movie's language is: " + response.data.Language);
            console.log("The movie's plot is: " + response.data.Plot);
            console.log("The movie's actor's are: " + response.data.Actors);

            //console.log(response)

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });



    /////////////////////////// check for CONCERT condition
    /////////////////////////// check for CONCERT condition
    /////////////////////////// check for CONCERT condition


} else if (argOne === "concert-this") {
    // console.log("concert this -- ive been called")

    var concertName = argTwo;
    axios.get("https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp=trilogy")
        .then(
            function (response) {
                console.log(response.data[0]);
                console.log("\n\n\n" + response.data[0].lineup[0]);
                console.log(response.data[0].venue.name);
                // var thedate = response.data[0].datetime;
                // console.log(thedate);
                // var thedateformatted = moment.utc(thedate).format("YYYY-MM-DD HH:mm:ss");
                // var date = moment(response.data[0].datetime).format('MM/DD/YYYY');
                console.log(response.data[0].datetime);
                //  console.log(date)

            })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    /////////////////////////// check for SPOTIFY condition
    /////////////////////////// check for SPOTIFY condition
    /////////////////////////// check for SPOTIFY condition
} else if (argOne === "spotify-this-song") {




    spotify.search({ type: 'track', query: argTwo }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //console.log(data);
        // console.log(data.tracks.items[0])
        console.log(process.argv[3]);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].artists[0].href);
    });


    /////////////////////////// check for DO WHAT IT SAYS
    /////////////////////////// check for DO WHAT IT SAYS
    /////////////////////////// check for DO WHAT IT SAYS
} else if (argOne === "do-what-it-says") {

    var fs = require("fs");

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

    });

}