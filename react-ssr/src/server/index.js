import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";

const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
  console.log(Routes);
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  );

  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

const server = app.listen(10086, () => {
  console.log("🚀 ~ file: index.js ~ line 32 ~ server ~ server");
});
