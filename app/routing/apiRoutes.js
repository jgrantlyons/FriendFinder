// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. 
// This will be used to display a JSON of all possible friends.

const path = require("path");
// var express = require("express");

let friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        // res.send('hello world');
        return res.json(friends);
        // console.log(json.profiles);
    });

    // //    * A POST routes `/api/friends`. 
    // This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {

        console.log(req.body);
        //array to hold all profiles in the array (minus the one being compared)
        //to parse through for the best match
        let results = [];
        
        //turn scores array of comparee into numbers from strings
        let stringScores = req.body.scores;
        let newScores = stringScores.map(function (arrayElement){
            return parseInt(arrayElement);
        });
        req.body.scores = newScores;

        // new profile for comparee added to the friends array
        friends.push(req.body);
        
        
        // fill results array with profiles + compatability scores
        console.log(friends);
        for(let i = 0; i<friends.length - 1; i++){

            let newScoresArray = req.body.scores;
            let oldScoresArray = friends[i].scores;
            let difference = 0;

            for(let j = 0; j<oldScoresArray.length; j++){
                let dif = Math.abs(oldScoresArray[j]) - newScoresArray[j];
                difference = difference + dif; 
                console.log("difference: ", difference);
            };

            let result = {
                name: friends[i].name,
                photo: friends[i].pictureLink,
                scoreDifference: difference
            };

            console.log("results: ", results);
            results.push(result);
            // for(let j = 0; j>allProfiles)

        };

        let match = results.reduce(function(previous, current){
            return previous.scoreDifference < current.scoreDifference ? previous : current;
        });
        
        res.json(match);
    });
};


