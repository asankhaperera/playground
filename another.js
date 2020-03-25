let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {

    console.log("Hello world from the other receive yyy");

    console.log(JSON.stringify(event));

    return { "message": "Successfully executed" };
};