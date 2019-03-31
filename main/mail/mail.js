const {ipcMain} = require('electron');
const {MAIL_GET, MAIL_SET} = require('../const/ipcEvents');

ipcMain.on(MAIL_GET, () => {
    if (global.win) {
        const mail = require('./data.json');
        global.win.webContents.send(MAIL_SET, mail);
    }
});
