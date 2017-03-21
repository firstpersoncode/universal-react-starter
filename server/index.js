import app from "./app";

let currentApp = app;
const PORT = 50045;
app.listen(PORT, () => {
  console.log(`=================================================



    server running on port ${PORT}


  =================================================`)
});

if (module.hot) {
    module.hot.accept("./app", () => {
        app.removeListener("request", currentApp);
        app.on("request", app);
        currentApp = app;
    });
}
