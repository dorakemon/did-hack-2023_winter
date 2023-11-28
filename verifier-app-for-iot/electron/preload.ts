// eslint-disable-next-line @typescript-eslint/no-var-requires
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  runOpenDoor: async () => await ipcRenderer.invoke('runOpenDoor', null),
  sendSlackNotification: async (data) =>
    await ipcRenderer.invoke('sendSlackNotification', data),
});
