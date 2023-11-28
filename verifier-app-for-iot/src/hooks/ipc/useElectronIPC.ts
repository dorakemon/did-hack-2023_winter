/**
 * ElectronとIPC通信を行うためのカスタムフック
 */
export const useElectronIPC = () => {
  /**
   * ドアを開ける
   */
  const runOpenDoor = async () => {
    await window.require('electron').ipcRenderer.invoke('runOpenDoor');
  };

  /**
   * Slackに通知を送る
   */
  const sendSlackNotification = async (data: any) => {
    await (window as any).api.sendSlackNotification(data);
  };
  return { runOpenDoor, sendSlackNotification };
};
