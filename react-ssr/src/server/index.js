import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../Routes";
import { getStore } from "../store";
import Mock from "mockjs";

const app = express();
app.use(express.static("public"));

app.get("/api/home/list", (req, res) => {
  res.send(
    Mock.mock({
      "data|5": [
        {
          "id|+1": 1,
          "title|+1": [111111, 222222, 333333, 444444, 555555, 666666],
        },
      ],
    })
  );
});

app.get("*", (req, res) => {
  const store = getStore();
  console.log(Routes);
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  );

  store.dispatch({ type: "INCREMENT" });

  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

const server = app.listen(10086, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Listen:", host + port);
});
