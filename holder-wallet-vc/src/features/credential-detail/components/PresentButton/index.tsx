import { Button, Sheet } from '@mui/joy';

type PresentButtonProps = {
  onClick: () => void;
};

export const PresentButton: React.FC<PresentButtonProps> = ({ onClick }) => {
  return (
    <Sheet
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: '16px',
        left: '0',
        right: '0',
        height: '32px',
        // margin: '16px',
      }}
    >
      <Button
        color="primary"
        onClick={onClick}
        sx={{
          height: '32px',
          width: 'calc(100% - 32px)',
          margin: '-32px 16px',
        }}
      >
        Present
      </Button>
    </Sheet>
  );
};
