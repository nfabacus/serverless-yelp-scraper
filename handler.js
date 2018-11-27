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
  await saveRatingsToDB(yelpData);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
