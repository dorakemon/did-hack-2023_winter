import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser';
import { useEffect, useRef, useState } from 'react';

type ZxingVideoProps = {
  onScan: (data: string) => void;
};

export const ZxingVideo: React.FC<ZxingVideoProps> = ({ onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(true);
  //const action = location.state?.action;

  useEffect(() => {
    if (videoRef.current && isScanning) {
      const codeReader = new BrowserQRCodeReader();
      let controls: IScannerControls;
      codeReader.decodeFromVideoDevice(
        undefined,
        videoRef.current,
        (result, error, ctrl) => {
          if (result) {
            onScan(result.getText());
            setIsScanning(false); // Stop scanning after the first successful result
            ctrl.stop(); // Stop the video stream
            if (error) {
              console.error(error);
            }
            controls = ctrl;
          }
        },
      );

      return () => {
        if (controls) {
          controls.stop();
        }
      };
    }
  }, [isScanning, onScan]);
  if (!isScanning) {
    return null;
  }

  return <video ref={videoRef} style={{ width: '100%' }} />;
};
