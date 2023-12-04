import AddIcon from '@mui/icons-material/Add';
import { Typography, Grid } from '@mui/joy';
import { Fab } from '@mui/material';

import { ColorTheme } from '@/theme/color';

type AddVCButtonProps = {
  onClick: () => void;
};

export const AddVCButton: React.FC<AddVCButtonProps> = ({ onClick }) => {
  return (
    <Fab
      variant="extended"
      size="large"
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        padding: '12px 16px',
        bgcolor: '#E3EFFB',
        borderRadius: '12px',
        height: '50px',
      }}
      onClick={onClick}
    >
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        gap={1}
      >
        <Typography sx={{ color: 'primary.softColor' }}>Add VC</Typography>
        <AddIcon sx={{ color: ColorTheme.primarySoftColor }} />
      </Grid>
    </Fab>
  );
};
