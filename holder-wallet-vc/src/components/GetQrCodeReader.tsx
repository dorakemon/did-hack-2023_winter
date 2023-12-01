import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";
import React, { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface QrCodeReaderProps {
  onReadQRCode: (text: string) => void;
}

export const GetQrCodeReader: FC<QrCodeReaderProps> = ({ onReadQRCode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
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

            navigate("/get-success", {
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

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //height: "100vh", // This assumes you want to center it in the viewport
  };

  const videoStyle = {
    width: "400px", // Adjust this value as needed
    height: "auto", // You can set a specific height or use 'auto' for maintaining the aspect ratio
    maxWidth: "800px", // Set a maximum width if needed
    maxHeight: "600px", // Set a maximum height if needed
  };

  // If we are not scanning, don't render the video element
  if (!isScanning) {
    return null;
  }

  return (
    <div style={containerStyle}>
      <video ref={videoRef} style={videoStyle} />
    </div>
  );
};
