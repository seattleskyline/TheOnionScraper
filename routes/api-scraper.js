// Required NPM Packages
const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const request = require("request");
const cheerio = require("cheerio");

var Comment = require("../models/comments.js");
var Article = require("../models/articles.js");

// // Require all models
// const db = require("./models");

module.exports = function(app) {
  // GET Route for scraping The Onion - American Voices 
  app.get("/scrape", function(req, res) {
    request("https://www.theonion.com/c/american-voices", function(error,response, html) {
      const $ = cheerio.load(response.body);

      // Grab Every Article
      $("article").each(function(i, element) {
        
        // Create an object with title, link, and summary
        let result = {};
        result.title = $(this)
          .find(".item__text h1 a")
          .text();
        result.link = $(this)
          .find(".item__text h1 a")
          .attr("href");
        result.summary = $(this)
          .find('p')
          .text();
        // Display result in terminal
        console.log(result);



        // Create a new Article using the `result` object built from scraping
        // db.Article.create(result)
        //   .then(function(dbArticle) {
        //     // View the added result in the console
        //     console.log(dbArticle);
        //   })
        //   .catch(function(err) {
        //     // If an error occurred, send it to the client
        //     return res.json(err);
        //   });
      });

      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scrape Complete");
    });
  });

  // Route for getting all Articles from the db
  app.get("/articles", function(req, res) {
    db.Article.find({})
      .then(function(dbArticles){
        res.json(dbArticles);
      })
  });

}


