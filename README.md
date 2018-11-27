# Yelp Scraper - Just a practice for building a Serverless App

Step 1:
make your project folder. and cd into it.
Step 2:
```sls create -t aws-nodejs```
Step 3:
```npm init```
Step 4:
```npm install --save cheerio uuid aws-sdk request request-promise```
Step 5:
Write a hanlder.js file.
Step 6:
Invoke the function just to test locally
```
sls invoke local -f scrape -d "ffionas-restaurant-london"
```
with ```-d``` you can pass event parameters to the function.



