const electron = require("electron");

const {
    app, 
    BrowserWindow, 
    MEnu, 
    ipcMain
} = electron;

let todayWindow;
let creteWindow
let listWindow;


app.on("ready", () => {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi Random"
    });

    todayWindow.loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    });
});