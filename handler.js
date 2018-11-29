'use strict';
const {
  getPage, parsePage, saveRatingsToDB
} = require('./utils');

module.exports.scrape = async (event, context) => {

  // 1. fetch yelp page
  const page = await getPage(event);
  // 2. parse the page
  const yelpData = await parsePage(page);
  // 3. save ratings data to our db
  try {
    const message = await saveRatingsToDB(yelpData, event);
    console.log("message>>>", message);
  } catch(err) {
    throw new Error(`Error scraping ${event}: ${JSON.stringify(err)}`);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Scraped ${event}`,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
