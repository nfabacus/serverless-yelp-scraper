const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (yelpData, businessName) => {
  const date = JSON.stringify(new Date());
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      businessName: businessName,
      reviewCount: yelpData.reviewCount,
      rating: yelpData.ratings,
      scrapedAt: date
    }
  };
  console.log('params>>>', params);
  dynamoDb.put(params, error => {
    console.log("inside dynamoDb callback");
    if (error) {
      console.error(`Error saving data to DynamoDB: ${JSON.stringify(error)}`);
      return Promise.reject(
        `Error saving data to DynamoDB: ${JSON.stringify(error)}`
      );
    } else {
      console.log('SUCCESS!!');
      return Promise.resolve(params.Item);
    }
  });

};