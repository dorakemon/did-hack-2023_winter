import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

import { app, BrowserWindow, ipcMain } from 'electron';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    // fullscreen: true,
    autoHideMenuBar: true,
  });

  if (app.isPackaged) {
    win.loadURL(`file://${path.join(__dirname, '..', 'dist', 'index.html')}`);
  } else {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('runOpenDoor', () => {
  const file_path: string =
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    process.env.PYTHON_OPEN_DOOR ?? '../raspi-script/open-door.py';
  console.log('hello');
  spawn('python3', [file_path]);
});

ipcMain.handle('sendSlackNotification', async (event, data) => {
  fs.writeFileSync('/tmp/vp.json', JSON.stringify(data));
  const file_path: string =
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    process.env.PYTHON_SLACK_NOTIFICATION ?? './send-slack-notification.py';
  spawn('python3', [file_path]);
});
