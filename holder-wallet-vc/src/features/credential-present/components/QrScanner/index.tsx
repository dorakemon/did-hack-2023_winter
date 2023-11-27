import { useMemo } from 'react';

import { QrScannerDefault, QrScannerDefaultProps } from './QrScannerDefault';
import { QrScannerScanned, QrScannerScannedProps } from './QrScannerScanned';

type QrScannerProps = {
  status: 'default' | 'scanned';
} & QrScannerDefaultProps &
  QrScannerScannedProps;

export const QrScanner: React.FC<QrScannerProps> = ({
  status,
  onScan,
  ...props
}) => {
  const component = useMemo(() => {
    switch (status) {
      case 'default':
        return <QrScannerDefault onScan={onScan} />;
      case 'scanned':
        return <QrScannerScanned {...props} />;
    }
  }, [status, onScan, props]);
  return component;
};
