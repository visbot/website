export.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.strinfify({
      message: 'Hello World'
    })
  }
};
