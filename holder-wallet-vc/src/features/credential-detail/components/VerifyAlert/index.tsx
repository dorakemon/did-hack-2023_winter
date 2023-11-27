import { Alert, Box, Button } from '@mui/joy';
import { useMemo } from 'react';

type VerifyAlertStatus = 'yet' | 'invalid';
type VerifyAlertProps = {
  status: VerifyAlertStatus;
  onClick: () => void;
};

export const VerifyAlert: React.FC<VerifyAlertProps> = ({
  status,
  onClick,
}) => {
  const statusView = useMemo<{
    text: string;
    color: 'neutral' | 'danger';
  }>(() => {
    if (status === 'yet')
      return {
        text: 'This is an Alert using the solid variant.',
        color: 'neutral',
      };
    return {
      text: 'This credential is invalid.',
      color: 'danger',
    };
  }, [status]);

  return (
    <Box width="100%">
      <Alert
        variant="soft"
        color={statusView.color}
        endDecorator={
          <Button
            size="sm"
            variant="soft"
            color={statusView.color}
            onClick={onClick}
          >
            Retry
          </Button>
        }
      >
        {statusView.text}
      </Alert>
    </Box>
  );
};
