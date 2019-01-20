"use strict";
const { getPage, parsePage, saveRatingsToDB } = require("./utils");

module.exports.scrape = (event, context, callback) => {
  // 1. fetch yelp page
  getPage(event)
  // 2. parse the page
    .then(page => parsePage(page))
    // 3. save ratings data to our db
    .then(yelpData => saveRatingsToDB(yelpData, event))
    .then(() =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Scraped ${event}`
        })
      })
    )
    .catch(error =>
      callback(new Error(`Error scraping ${event}: ${JSON.stringify(error)}`))
    );
};
