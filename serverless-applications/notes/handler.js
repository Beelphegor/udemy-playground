"use strict";
const DynamoDB = require("aws-sdk/clients/dynamodb");
const documentClient = new DynamoDB.DocumentClient({
  region: "eu-central-1",
  maxRetries: 3,
  httpOptions: {
    timeout: 5000,
  },
});
const NOTES_TABLE_NAME = process.env.NOTES_TABLE_NAME;

module.exports.createNote = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let data = JSON.parse(event.body);
  try {
    const params = {
      TableName: NOTES_TABLE_NAME,
      Item: {
        notesId: data.id,
        title: data.title,
        body: data.body,
      },
      ConditionExpression: "attribute_not_exists(notesId)",
    };
    await documentClient.put(params).promise();
    callback(null, { statusCode: 201, body: JSON.stringify(data) });
  } catch (error) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify(error.message),
    });
  }
};

module.exports.updateNote = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let notesId = event.pathParameters.id;
  let data = JSON.parse(event.body);
  try {
    const params = {
      TableName: NOTES_TABLE_NAME,
      Key: {
        notesId,
      },
      UpdateExpression: `set #title = :title, #body = :body`,
      ExpressionAttributeNames: {
        "#title": "title",
        "#body": "body",
      },
      ExpressionAttributeValues: {
        ":title": data.title,
        ":body": data.body,
      },
      ConditionExpression: "attribute_exists(notesId)",
    };
    await documentClient.update(params).promise();
    callback(null, { statusCode: 200, body: JSON.stringify(data) });
  } catch (error) {
    callback(null, { statusCode: 500, body: JSON.stringify(error.message) });
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `update note: ${noteId}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.deleteNote = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let notesId = event.pathParameters.id;
  try {
    const params = {
      TableName: NOTES_TABLE_NAME,
      Key: {
        notesId,
      },
      ConditionExpression: "attribute_exists(notesId)",
    };
    await documentClient.delete(params).promise();

    callback(null, { statusCode: 200, body: JSON.stringify(notesId) });
  } catch (error) {
    callback(null, { statusCode: 500, body: JSON.stringify(error.message) });
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `update note: ${noteId}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getAllNotes = async (event, context, callback) => {
  try {
    const params = {
      TableName: NOTES_TABLE_NAME,
    };

    const notes = await documentClient.scan(params).promise();

    callback(null, { statusCode: 200, body: JSON.stringify(notes) });
  } catch (error) {
    callback(null, { statusCode: 500, body: JSON.stringify(error.message) });
  }
};
