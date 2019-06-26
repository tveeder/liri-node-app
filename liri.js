
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var argOne = process.argv[2];
console.log(argOne)
var argTwo = process.argv[3];
console.log(argTwo)

// Then run a request with axios to the OMDB API with the movie specified
//  axios.get("http://www.omdbapi.com/?t=remember  & y=& plot=short & apikey=trilogy").then(


/////////////////////////// check for MOVIE condition  //////////////////////

if (argOne === "movie-this") {
    console.log('movie-this ive been called')

    var movieTitle = argTwo;

    axios.get("http://www.omdbapi.com/?t=" + argTwo + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            // if response.title = "" {
            //     response.data.Title = "Mr. Nobody"
            // }
            console.log("The movie's title is: " + response.data.Title);
            console.log("The movie's year of release is: " + response.data.Year);
            console.log("The movie's IMDB rating is: " + response.data.Rated[0]);
            console.log("The movie's Rotten Tomato's rating is: " + response.data.Rated[1]);
            console.log("The movie's country where it was produced is: " + response.data.Country);
            console.log("The movie's language is: " + response.data.Language);
            console.log("The movie's plot is: " + response.data.Plot);
            console.log("The movie's actor's are: " + response.data.Actors);

            // console.log(response)

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
    console.log('ending of first condition')

} else if (argOne === "concert-this") {
    console.log("concert this -- ive been called")

    var concertName = argTwo;
    axios.get("https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp=trilogy").then(

        function (response) {
            //    console.log("The concert is: " + response.data.Rated[3]);
            console.log(response.data)
            console.log(response.data.id)
            console.log(response.data.venue)
            console.log(response.data.datetime)
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
} else if (argOne === "spotify-this-song") {

    axios.get("https://rest.bandsintown.com/artists/" + argTwo + "/events?app_id=codingbootcamp=trilogy").then(

        function (response) {
            console.log(response.data)
            // console.log("The concert is: " + response.data.Rated[0]);
            // console.log(response)

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

    /////////////////////////// check for DO WHAT IT SAYS condition

} else if (argOne === "do-what-it-says") {

    // fs is a core Node package for reading and writing files
    var fs = require("fs");

    // This block of code will read from the "movies.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

    });

}