import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import App from './App';

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    res.writeHead( 200, { "Content-Type": "text/html" } );
        const reactDom = renderToString( <App/> );
        res.end( htmlTemplate( reactDom) );
    }
);

app.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="y18.gif" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="y18.gif" />
      <title>Hacker News App</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${reactDom}</div>
    </body>
  </html>`;
}
