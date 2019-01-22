# Yelp Scraper - Just a practice for building a Serverless App

### Set up
- Step 1:
make your project folder. and cd into it.
- Step 2:
```sls create -t aws-nodejs```
- Step 3:
```npm init```
- Step 4:
```npm install --save cheerio uuid aws-sdk request request-promise```  cheerio is just for grabing dom elements like jquery, just needed for this project.
- Step 5:
Write a hanlder.js file.
- Step 6:
Invoke the function just to test locally
```
sls invoke local -f scrape -d "ffionas-restaurant-london"
```
with ```-d``` you can pass event parameters to the function.

- Step 7:
Create a dynamoDB table in AWS site.

- Step 8:
Amend serverless.yml file.
For default
```yaml
provider:
  ...
  stage: dev  # default stage.
  region: eu-west-2
```
add iamRoleStatements as well.

Make sure to include other folders like below:
```yaml
package:
  include:
    - utils/**
```

### Deployment
```sls deploy```
```sls deploy -s dev``` for development

### Invoking Lambda functions by code
See ```launch.js```


### serverless-offline-scheduler
- Step 1:
```npm install --save-dev serverless-offline-scheduler
```
- Step 2:
serverless.yml
```
plugins:
  - serverless-offline-scheduler
```

- Step 3:
```sls schedule```
