const { sendEventsEmail } = require("./mailer");
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    const recipient = event.placementInfo.attributes.recipient || [
      "omejia@hypernovalabs.com"
    ];
    await sendEventsEmail([recipient], event);
    response = {
      statusCode: 200,
      body: JSON.stringify({ ...event.body })
    };
  } catch (err) {
    return err;
  }

  return response;
};
