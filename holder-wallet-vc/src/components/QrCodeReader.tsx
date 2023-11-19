// import React, { FC, useEffect, useRef, useState } from "react";
// import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";
// import { useNavigate } from "react-router-dom";

// interface QrCodeReaderProps {
//   onReadQRCode: (text: string) => void;
// }

// const QrCodeReader: FC<QrCodeReaderProps> = ({ onReadQRCode }) => {
//   const [isScanning, setIsScanning] = useState(true); // Add a state to track if we are scanning
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const navigate = useNavigate();

//   const navigateToQrResult = () => {
//     navigate("/qrcode/success");
//   };

//   useEffect(() => {
//     let controls: IScannerControls;
//     if (videoRef.current && isScanning) {
//       // Only proceed if we are still scanning
//       const codeReader = new BrowserQRCodeReader();
//       codeReader
//         .decodeFromVideoDevice(undefined, videoRef.current, (result, error) => {
//           if (result) {
//             onReadQRCode(result.getText());
//             setIsScanning(false); // Stop scanning once we have a result
//             if (controls) {
//               controls.stop();
//             }
//           }
//           if (error) {
//             console.error(error);
//           }
//         })
//         .then((ctr) => {
//           controls = ctr;
//         });
//     }

//     return () => {
//       if (controls) {
//         controls.stop();
//       }
//     };
//   }, [navigateToQrResult, isScanning]); // Add isScanning as a dependency

//   return <video ref={videoRef} />;
// };

// export default QrCodeReader;
// ... other imports
import React, { FC, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";

interface QrCodeReaderProps {
  onReadQRCode: (text: string) => void;
}

const QrCodeReader: FC<QrCodeReaderProps> = ({ onReadQRCode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScanning, setIsScanning] = useState(true); // State to control scanning
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
            onReadQRCode(result.getText());
            setIsScanning(false); // Stop scanning after the first successful result
            ctrl.stop(); // Stop the video stream

            navigate("/credential", {
              state: { qrCode: result.getText() },
            });
            if (error) {
              console.error(error);
            }
            controls = ctrl;
          }
        }
      );

      return () => {
        if (controls) {
          controls.stop();
        }
      };
    }
  }, [onReadQRCode, navigate, isScanning]); // Add isScanning to the dependency array

  // If we are not scanning, don't render the video element
  if (!isScanning) {
    return null;
  }

  return <video ref={videoRef} style={{ width: "100%" }} />;
};

export default QrCodeReader;
