import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';


crashReporter.start();

let mainWindow = null;

app.on('ready', () => {
  mainWindow = createMainWindow();
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
    height: 450,
    maxWidth: 944,
    maxHeight: 450,
    autoHideMenuBar: true,
    'auto-hide-menu-bar': true,
  });

  win.loadURL('http://localhost:8080/dist/index.html');
  win.setMenuBarVisibility(false);
  win.openDevTools();

  win.on('closed', onClosed);

  return win;
}

function onClosed () {
  mainWindow = null;
}
