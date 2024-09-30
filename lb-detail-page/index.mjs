export const handler = async (event) => {
    console.log('[Event]: Se capturó un evento en la lambda lb-detail-page');
    const response = {
      headers: { 'Content-Type': 'text/html' },
      statusCode: 200,
      body: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Index Page</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </head>
            <body>
                <div class="container">
                    <h2>Navegación Entre lambdas (Detail)</h2>
                    <button type="button" onclick="goToProductLambda()" class="btn btn-primary">Lambda Producto</button>
                    <button type="button" onclick="goToIndexLambda()" class="btn btn-success">Lambda Index</button>
                </div>
                <script>
                    const host = 'https://s98hgsp03m.execute-api.us-east-1.amazonaws.com/prod/';
                    function goToProductLambda(){
                        window.location.href = host + 'lb-product-page';
                    }
                    function goToIndexLambda(){
                        window.location.href = host + 'lb-index-page';
                    }
                </script>
            </body>
            </html>
            `,
    };
    return response;
  };