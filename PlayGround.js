let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {

    console.log("Hello world from one publish xxx");
    try {
        let data = await sqs.sendMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/temp`,
            MessageBody: "Hello World",
            DelaySeconds: 0
        }).promise();

    } catch (err) {
        console.log("Error " + err);
    };


    return { "message": "Successfully executed" };
};