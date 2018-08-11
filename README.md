# [The_Onion_Scraper](https://still-peak-55715.herokuapp.com)

### Overview
An app that scrapes articles from the The Onion - American Voices website and lets users save articles and leave sarcastic names, job, comments on these 

### How It Works
##### Home Page
  <img src="/public/images/homepage.png" width="300"></img>
- The app scrapes http://www.theonion.com/c/american-voices for all the articles on the page, loads them into a database, and displays them on the homepage.
- The homepage will display all the headline, summary, and clickable link for each of the articles.
##### Saving Articles
  <img src="/public/images/SavedArticles.png" width="300"></img>
- The User can save articles by clicking on the 'Save" Button.
- The 'Saved Articles' page will display all of the Saved Articles
- Saved articles can be removed from the Saved List by clicking the red "X" button.
##### Commenting
  <img src="/public/images/AddComment.png" width="300"></img>
- When the user clicks on the 'Comments' button on an article, they will be redirected to a page showing the article, and all of the comments on that page.
- To add a Comment, click on the 'New Comment' Button and enter a ficitious name, occupation, and comment.
- Comments can be deleted from the database by clicking on the red 'X' Button.

**Technologies Used**

  - Node.js, Express.js, Handlebars.js, MongoDB, Mongoose, Body-Parser, Express, Handlebars, Mongoose, Cheerio, Request, Bootstrap
