const {app, BrowserWindow, globalShortcut} = require('electron');
require('./mail/mail');

const path = require('path');
const fs = require('fs');
const url = require('url');
const os = require('os');

function createWindow() {
    global.win = new BrowserWindow(
        {
            width: 800,
            height: 600
        }
    );
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    global.win.loadURL(startUrl);

    global.win.on('closed', function() {
        global.win = null
    });

    const reactDevExtension = path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0');
    if (fs.existsSync(reactDevExtension)) {
        BrowserWindow.addDevToolsExtension(reactDevExtension);
    }

    globalShortcut.register('Alt+Shift+CmdOrCtrl+J', () => {
        console.log('Opening dev tools...');
        if (global.win.isFocused()) {
            global.win.openDevTools();
        }
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    app.quit();
});

app.on('activate', function() {
    if (global.win === null) {
        createWindow()
    }
});

app.on('will-quit', function() {
    globalShortcut.unregisterAll();
});
