import { QrScannerDefault, QrScannerDefaultProps } from './QrScannerDefault';
import { QrScannerScanned, QrScannerScannedProps } from './QrScannerScanned';

type QrScannerProps = {
  status: 'default' | 'scanned';
} & QrScannerDefaultProps &
  QrScannerScannedProps;

export const QrScanner: React.FC<QrScannerProps> = ({ status, ...props }) => {
  return (
    <>
      {status === 'default' && <QrScannerDefault {...props} />}
      {status === 'scanned' && <QrScannerScanned {...props} />}
    </>
  );
};
