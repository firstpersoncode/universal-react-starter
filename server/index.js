import app from "./app";

let currentApp = app;
app.listen(50045);

if (module.hot) {
    module.hot.accept("./app", () => {
        app.removeListener("request", currentApp);
        app.on("request", app);
        currentApp = app;
    });
}
