import app from 'app';
import { globalShortcut } from 'electron';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';

import { ensureIsInstalled } from './services/install';
import * as shortcuts from './shortcuts';

crashReporter.start();

let mainWindow = null;

app.on('ready', async () => {
  await ensureIsInstalled();
  mainWindow = createMainWindow();
  registerShortcuts(shortcuts, globalShortcut)({ window: mainWindow });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate-with-no-open-windows', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});


function createMainWindow () {
  const win = new BrowserWindow({
    width: 944,
    height: 720,
    minWidth: 944,
    minHeight: 720,
    autoHideMenuBar: true,
    'auto-hide-menu-bar': true,
  });

  win.loadURL('http://localhost:8080/dist/index.html');
  win.setMenuBarVisibility(false);
  win.openDevTools();

  win.on('closed', onClosed);

  return win;
}

function registerShortcuts (shortcuts, globalShortcut) {
  return (params) => {
    Object.keys(shortcuts).forEach((shortcutFucn) => {
      const shortcut = shortcuts[shortcutFucn].bind(shortcutFucn, params)();

      if (!globalShortcut.isRegistered(shortcut.accelerator)) {
        globalShortcut.register(
          shortcut.accelerator,
          shortcut.handler
        );
      }
    });
  };
}

function onClosed () {
  mainWindow = null;
}
