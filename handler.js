'use strict';
const {
  getPage, parsePage, saveRatingsToDB
} = require('./utils');

module.exports.scrape = (event, context, callback) => {
  const scrapePage = async () => {
    // 1. fetch yelp page
    const page = await getPage(event);
    // 2. parse the page
    const yelpData = await parsePage(page);
    // 3. save ratings data to our db
    try {
      await saveRatingsToDB(yelpData, event);
    } catch(err) {
      throw new Error(`Error scraping ${event}: ${JSON.stringify(err)}`);
    }
  };
  scrapePage();
  // adding return or callback to this handler.js will prevent dynamoDB to save the data for some reason..
  // for now, I will not add return or callback to this handler.js.
};
