// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. 
// This will be used to display a JSON of all possible friends.
// //    * A POST routes `/api/friends`. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
const path = require("path");
var express = require("express");

let friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        // res.send('hello world');
        return res.json(friends);
        // console.log(json.profiles);
    });

    //get.post("/api/friends") route with compatibility logic 
    //maybe put it in server.js file?
    app.post("/api/friends", function(){
        friends.push(res.body);
    });



};


