'use strict';

const axios = require("axios")

module.exports.handler = async (event) => {
  const message = JSON.parse(event.Records[0].Sns.Message)
  const lambdaFunctionName = message.Trigger.Dimensions[0].value
  const condition = message.Trigger.ComparisonOperator
  const threshold = message.Trigger.Threshold
  const periodInMinutes = message.Trigger.EvaluationPeriods
  const contentOfMessage = `@here **${lambdaFunctionName}** lambda has **${condition}** **${threshold}** errors in period **${periodInMinutes}** minutes`
  await axios.post(process.env.WEBHOOK_URL, {
    content: contentOfMessage
  })
};
