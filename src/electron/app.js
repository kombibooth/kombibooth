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
    width: 1250,
    height: 650,
  });

  win.loadUrl('http://localhost:8080/dist/index.html');
  win.openDevTools();

  win.on('closed', onClosed);
  win.on('enter-full-screen', onEnterFullScreen);
  win.on('leave-full-screen', onLeaveFullScreen);

  return win;
}

function onClosed () {
  mainWindow = null;
}

function onEnterFullScreen () {
  this.setMenuBarVisibility(false);
}

function onLeaveFullScreen () {
  this.setMenuBarVisibility(true);
}
