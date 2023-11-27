import { Card, Grid, Typography } from '@mui/joy';
import { memo } from 'react';

import { ZxingVideo } from '@/components/ZxingVideo';

export type QrScannerDefaultProps = {
  onScan: (data: string) => void;
};

export const QrScannerDefault: React.FC<QrScannerDefaultProps> = memo(
  ({ onScan }) => {
    return (
      <Card variant="soft" color="primary" sx={{ padding: '16px' }}>
        <Grid gap={2} direction={'column'} container>
          <Typography
            fontWeight={500}
            fontSize="14px"
            lineHeight="21px"
            sx={{ color: 'primary.soft' }}
          >
            Scan QR Code
          </Typography>
          <ZxingVideo onScan={onScan} />
        </Grid>
      </Card>
    );
  },
);

QrScannerDefault.displayName = 'QrScannerDefault';
