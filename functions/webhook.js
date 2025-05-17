exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const params = event.queryStringParameters;

  console.log("Received data:", params); // Visible in Netlify logs

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "✅ Data received",
      received: params,
    }),
  };
};
