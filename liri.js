
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var argOne = process.argv[2];
console.log(argOne)
// var argTwo = process.argv[3];
// console.log(argTwo)

// Then run a request with axios to the OMDB API with the movie specified
//  axios.get("http://www.omdbapi.com/?t=remember  & y=& plot=short & apikey=trilogy").then(


/////////////////////////// check for MOVIE condition  //////////////////////

if (argOne = "movie-this") {

    axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
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
} else if (argOne = "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp=trilogy").then(

        function (response) {
            // console.log("The concert is: " + response.data.Rated[0]);
            console.log(response)

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
} else if (argOne = "spotify-this-song") {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp=trilogy").then(

        function (response) {
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

} else if (argOne = "do-what-it-says") {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp=trilogy").then(

        function (response) {
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
}
