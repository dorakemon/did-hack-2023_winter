import { Button, Sheet } from '@mui/joy';

type PresentButtonProps = {
  onClick: () => void;
};

export const PresentButton: React.FC<PresentButtonProps> = ({ onClick }) => {
  return (
    <Sheet
      sx={{
        width: '100%',
        height: '32px',
      }}
    >
      <Button
        color="primary"
        onClick={onClick}
        sx={{
          height: '32px',
        }}
        fullWidth
      >
        Present
      </Button>
    </Sheet>
  );
};
