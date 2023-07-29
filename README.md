## About

The project has focus to notify via Discord when cloudwatch alarm is triggered have 2 situations:
- Lambda function has a lot errors
- When queue has a lot messages

## Instructions 
- Clone 
- Execute comnand **npm i**
- Create **serverless.env.yml** file based **serverless.example.yml** file
- Execute command **sls deploy --stage dev** to deploy lambdas functions in dev environment.
- Execute command **sls deploy --stage staging** to deploy lambdas functions in staging environment.
- Execute command **sls deploy --stage prod** to deploy lambdas functions in prod environment.
