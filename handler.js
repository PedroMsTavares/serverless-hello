'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'I am an Hello World type function!'
      },
      null,
      2
    ),
  };
};
