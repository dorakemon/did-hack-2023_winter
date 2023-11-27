import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser';
import { useEffect, useRef } from 'react';

type ZxingVideoProps = {
  onScan: (data: string) => void;
};

export const ZxingVideo: React.FC<ZxingVideoProps> = ({ onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const codeReader = new BrowserQRCodeReader();
      let controls: IScannerControls;
      codeReader.decodeFromVideoDevice(
        undefined,
        videoRef.current,
        (result, error, ctrl) => {
          if (result) {
            onScan(result.getText());
            ctrl.stop();
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
  }, [onScan]);

  return <video ref={videoRef} style={{ width: '100%' }} />;
};
