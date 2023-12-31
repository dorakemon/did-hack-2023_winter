import { Button, Card, Grid, Typography } from '@mui/joy';

export type QrScannerScannedProps = {
  did: string;
  onPresent: () => void;
  onRetry: () => void;
  presentButtonLoading: boolean;
};

export const QrScannerScanned: React.FC<QrScannerScannedProps> = ({
  did,
  onPresent,
  onRetry,
  presentButtonLoading,
}) => {
  return (
    <Card variant="soft" color="success" sx={{ padding: '16px' }}>
      <Grid gap={2} direction="column" container>
        <Typography
          fontWeight={500}
          fontSize="14px"
          lineHeight="21px"
          sx={{ color: 'primary.soft' }}
        >
          QR code was successfully scanned
        </Typography>
        <Card color="neutral" sx={{ padding: '8px', width: '240px' }}>
          <Typography noWrap>{did}</Typography>
        </Card>
        <Grid direction="row" justifyContent="space-between" container>
          <Button color="success" variant="soft" onClick={onRetry}>
            Retry
          </Button>
          <Button
            color="success"
            onClick={onPresent}
            loading={presentButtonLoading}
          >
            Present to this DID
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
