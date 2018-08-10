// Required NPM Packages
const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const request = require("request");
const cheerio = require("cheerio");
const path = require('path');

// Require all models
const db = require("../models");

module.exports = function(app) {

  // Home Page
  app.get("/home", function(req, res) {
    db.Article.find({})
    // This puts saved comments on the top
    // .sort({'saved': -1})
    .populate('comment')
    .then(function(dbArticle){
      res.render("home", {
        Articles: dbArticle
      });
    })
  });

  // Add/Edit Comment Page
  app.get("/article/Comments/:id", function(req, res){
    db.Article.findOne({ _id: req.params.id})
      .populate('comment')
      .then(function(dbArticle){
        res.render('editcomment', {
          Article: dbArticle
        })
      }).catch(function(err){
        res.json(err)
      })
  })

  // Saved Jobs Page
  app.get('/savedArticles', function(req, res){
    db.Article.find({ saved : true })
      .populate('comment')
      .then(function(dbArticle){
        res.render('savedArticles', {
          Articles: dbArticle
        })
      }).catch(function(err){
        res.json(err)
      })
  })


}
