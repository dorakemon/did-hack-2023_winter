import QRCode from 'qrcode.react';
import React from 'react';

type QrCodeComponentProps = {
  jsonData: any;
  size?: number;
};

export const QRCodeComponent: React.FC<QrCodeComponentProps> = ({
  jsonData,
  size = 400,
}) => {
  const dataString = JSON.stringify(jsonData);
  return <QRCode value={dataString} size={size} level="L" />;
};
