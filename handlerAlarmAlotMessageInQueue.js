'use strict';

const axios = require("axios")

module.exports.handler = async (event) => {
  const message = JSON.parse(event.Records[0].Sns.Message)
  const queue = message.Trigger.Dimensions[0].value
  const condition = message.Trigger.ComparisonOperator
  const threshold = message.Trigger.Threshold
  const periodInMinutes = message.Trigger.EvaluationPeriods
  const contentOfMessage = `@here **${queue}** queue has **${condition}** **${threshold}** in period **${periodInMinutes}** minutes`
  await axios.post(process.env.WEBHOOK_URL, {
    content: contentOfMessage
  })
};
