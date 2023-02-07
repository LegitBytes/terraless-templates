module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Your Terraless function executed successfully!',
          input: event,
        },
        null,
        2
      ),
    };
  };