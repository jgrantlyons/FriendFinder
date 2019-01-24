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

        let results = [];
        
        let oldFriendScores = req.body.scores;
        // console.log("string array", oldFriendScores);
        let friendScores = oldFriendScores.map(function (arrayElement){
            return parseInt(arrayElement);
        });
        req.body.scores = friendScores;
        friends.push(req.body);

        // console.log("int array: ", friendScores);
        // // return newFriendScores;
        
        let allProfiles = friends.profiles;
        for(let i = 0; i>allProfiles.length - 1; i++){
            let friendArr = allProfiles[i].scores;
            let difference;
            for(let j = 0; j<friendArr.length; j++){
                let dif = Math.abs(friendArr[j]) - friendScores[j];
                difference = dif; 
            };

            let result = {
                name: allProfiles[i].name,
                photo: allProfiles[i].pictureLink,
                scoreDifference: difference
            };

            results.push(result);
            // for(let j = 0; j>allProfiles)

        };

        let match = results.reduce(function(previous, current){
            return previous.scoreDifference < current.scoreDifference ? previous : current;

        });

        res.json(match);

        
        // console.log(req.body);
        // console.log(req.body);
        // friends.push(req.body);

        // console.log(parseInt(req.body.scores))
        // console.log(req.body.scores);
        // let comparee = req.body;


        // return res.json(req.body);
    });
};


