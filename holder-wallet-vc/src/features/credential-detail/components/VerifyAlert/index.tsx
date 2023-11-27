import { Alert, Box, Button } from '@mui/joy';
import { useMemo } from 'react';

export type VerifyAlertStatus = 'yet' | 'invalid' | 'valid';
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
    buttonText: string;
  }>(() => {
    if (status === 'yet')
      return {
        text: 'This credential has not been verified.',
        color: 'neutral',
        buttonText: 'Verify',
      };
    return {
      text: 'This credential is invalid.',
      color: 'danger',
      buttonText: 'Retry',
    };
  }, [status]);

  if (status === 'valid') return null;

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
            {statusView.buttonText}
          </Button>
        }
      >
        {statusView.text}
      </Alert>
    </Box>
  );
};
