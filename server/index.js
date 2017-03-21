import app from "./app";

let currentApp = app;
const PORT = 50045;

if (process.env.NODE_ENV === "production") {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });
} else {
  app.listen(PORT, () => {
    console.log(`=================================================

      **************************************************
      server running on port ${PORT}
      happy coding ...
      **************************************************

    =================================================`)
  });

  if (module.hot) {
    module.hot.accept("./app", () => {
      app.removeListener("request", currentApp);
      app.on("request", app);
      currentApp = app;
    });
  }
}
