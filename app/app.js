const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

app.on('ready', function() {
  win = new BrowserWindow({width: 800, height: 600});
  win.on('closed', () => {
    win = null;
  })

  win.setMenu(null);

  win.loadURL(`https://laba3server.herokuapp.com`);
});
