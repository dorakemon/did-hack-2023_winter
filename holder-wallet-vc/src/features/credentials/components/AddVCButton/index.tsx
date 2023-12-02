import AddIcon from '@mui/icons-material/Add';
import { Typography, Grid, ModalClose } from '@mui/joy';
import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import { Fab } from '@mui/material';
import React from 'react';

import { ColorTheme } from '@/theme/color';

export const AddVCButton = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <Fab
        variant="extended"
        size="large"
        onClick={() => setOpen(true)} // Add the onClick handler here
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          padding: '12px 16px',
          bgcolor: '#E3EFFB',
          borderRadius: '12px',
          height: '50px',
        }}
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

      {/* Modal Component */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: '70%', // Set the width as a percentage of the screen width
            height: 'auto', // Set height to auto to allow content to determine the size
            maxWidth: 800, // Set the maximum width
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Notice
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary" mb={1}>
            not implimented yet :(
          </Typography>
        </Sheet>
      </Modal>
    </>
  );
};
