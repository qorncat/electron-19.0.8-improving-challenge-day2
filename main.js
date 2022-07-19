const { app, BrowserWindow, Menu } = require('electron')
const { setupTitlebar, attachTitlebarToWindow } = require('electron-customtitlebar-21425/main');
const path = require('path')
require('./ExpressJS/app')
const functions = require('./functions')

const exampleMenuTemplate = require('./ElectronJS/Menu/getMenu')
// setup the titlebar main process
setupTitlebar();

//creates window
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, '/ElectronJS/preload.js')
    },
  })
  const menu = Menu.buildFromTemplate(exampleMenuTemplate());
  Menu.setApplicationMenu(menu);
  win.loadURL('http://localhost:'+`${functions.port()}` + '/')
  attachTitlebarToWindow(win);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})