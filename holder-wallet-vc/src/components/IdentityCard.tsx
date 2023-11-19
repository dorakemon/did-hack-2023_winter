// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Typography,
//   Box,
//   Modal,
//   Link,
//   Grid,
// } from "@mui/material";
// import InfoIcon from "@mui/icons-material/Info";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import Divider from "@mui/material/Divider";

// type IdentityProps = {
//   name: string;
//   onDetailClick: () => void;
//   onVerifyClick: () => void;
// };

// type IdentityCardProps = { cardTitle: string };

// const Identity: React.FC<IdentityProps> = ({
//   name,
//   onDetailClick,
//   onVerifyClick,
// }) => {
//   //const isPresent = cardTitle === "Student Card";
//   return (
//     <Card variant="outlined" sx={{ marginBottom: 2 }}>
//       <CardContent sx={{ paddingBottom: "16px" }}>
//         <Typography variant="h5" component="div">
//           {name}
//         </Typography>
//       </CardContent>
//       <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "8px" }}>
//         <CardActions>
//           <Button
//             variant="contained"
//             size="small"
//             color="primary"
//             onClick={onDetailClick}
//           >
//             <InfoIcon />
//             Details
//           </Button>
//           <Button
//             variant="outlined"
//             size="small"
//             color="secondary"
//             onClick={onVerifyClick}
//             sx={{ marginLeft: "8px" }}
//           >
//             <CheckCircleOutlineIcon />
//             Verify
//           </Button>
//         </CardActions>
//       </Box>
//     </Card>
//   );
// };

// // Usage example with state to handle modal visibility
// export const IdentityCard: React.FC<IdentityCardProps> = ({ cardTitle }) => {
//   const [isModalOpen, setModalOpen] = React.useState(false);

//   const handleDetailClick = () => {
//     setModalOpen(true);
//   };

//   const handleVerifyClick = () => {
//     console.log("Verify action triggered");
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <Identity
//         name={cardTitle}
//         onDetailClick={handleDetailClick}
//         onVerifyClick={handleVerifyClick}
//       />
//       <Modal open={isModalOpen} onClose={handleCloseModal}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 270, // Set the width as needed
//             height: 340,
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//           }}
//         >
//           <Typography
//             id="modal-modal-title"
//             variant="h6"
//             component="h2"
//             sx={{ fontWeight: "bold" }}
//           >
//             {cardTitle}
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               <Typography sx={{ "& span": { marginLeft: "100px" } }}>
//                 Name <span>Taro Yamada</span>
//               </Typography>
//               <Typography sx={{ "& span": { marginLeft: "50px" } }}>
//                 University <span>Waseda University</span>
//               </Typography>
//               <Typography sx={{ "& span": { marginLeft: "80px" } }}>
//                 Laboratory <span>Sako Lab</span>
//               </Typography>
//               <Typography sx={{ "& span": { marginLeft: "100px" } }}>
//                 Birthdate <span>2000/1/1</span>
//               </Typography>
//             </Box>
//           </Typography>

//           <Divider sx={{ my: 2 }} />
//           <Box
//             sx={{
//               mt: 2,
//               display: "flex",
//               flexDirection: "column",
//               gap: 1,
//             }}
//           >
//             <Button
//               sx={{
//                 textTransform: "none",
//               }}
//               variant="contained"
//               startIcon={<CheckCircleOutlineIcon />}
//               onClick={handleCloseModal}
//             >
//               Verify
//             </Button>
//           </Box>
//           <Box
//             sx={{
//               mt: 2,
//               display: "flex",
//               flexDirection: "column",
//               gap: 1,
//             }}
//           >
//             <Button
//               sx={{
//                 color: "#2196f3",
//                 bgcolor: "white",
//                 borderColor: "#ff0000",
//                 textTransform: "none",
//               }}
//               variant="contained"
//               //startIcon={<CheckCircleOutlineIcon />}
//               onClick={handleCloseModal}
//             >
//               View as a raw JSON file
//             </Button>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center", // Center the button horizontally
//               mt: 2, // Margin top for spacing
//             }}
//           >
//             <Button
//               sx={{
//                 textTransform: "none",
//               }}
//               variant="outlined"
//               onClick={handleCloseModal}
//             >
//               Close
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default IdentityCard;

import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Modal,
  Link,
  Grid,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Divider from "@mui/material/Divider";

type IdentityProps = {
  name: string;
  onDetailClick: () => void;
  onVerifyClick: () => void;
};

type IdentityCardProps = { cardTitle: string };

const Identity: React.FC<IdentityProps> = ({
  name,
  onDetailClick,
  onVerifyClick,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 2,
        bgcolor: "#e3f2fd",
        width: 350,
        height: "auto",
        boxShadow: 3,
      }}
    >
      <CardContent
        sx={{
          paddingBottom: "16px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="subtitle1" component="div">
          {name}
        </Typography>
      </CardContent>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", margin: "8px" }}
      >
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={onDetailClick}
            sx={{
              marginRight: "8px",
              textTransform: "none",
              backgroundColor: "#2196F3", // This is the Material UI 'blue' color
              color: "white",
              "&:hover": {
                backgroundColor: "#1976D2", // Darker blue on hover
              },
              padding: "2px 7px",
              fontSize: "0.8rem",
            }}
          >
            <CheckCircleOutlineIcon
              sx={{ color: "white", marginRight: "8px" }}
            />
            Details
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={onVerifyClick}
            sx={{
              textTransform: "none",
              color: "#2196F3",
              borderColor: "#2196F3",
              "&:hover": {
                backgroundColor: "rgba(33, 150, 243, 0.04)", // Light blue background on hover
                borderColor: "#1976D2", // Darker blue border on hover
              },
              padding: "2px 7px",
              fontSize: "0.8rem",
            }}
          >
            <CheckCircleOutlineIcon
              sx={{ color: "#2196F3", marginRight: "8px" }}
            />
            Verify
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

// Usage example with state to handle modal visibility
export const IdentityCard: React.FC<IdentityCardProps> = ({ cardTitle }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleDetailClick = () => {
    setModalOpen(true);
  };

  const handleVerifyClick = () => {
    console.log("Verify action triggered");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderCardDetails = (cardTitle: any): JSX.Element => {
    let detailsContent;
    switch (cardTitle) {
      case "Student Card":
        detailsContent = (
          <>
            <Typography>Name: Yamamoto Ponyo</Typography>
            <Typography>University: Waseda University</Typography>
            <Typography>Laboratory: Sako Lab</Typography>
            <Typography>Birthdate: 2000/1/1</Typography>
          </>
        );
        break;
      case "MyNumber Card":
        detailsContent = (
          <>
            <Typography>Name: Yamamoto Ponyo</Typography>
            <Typography>MyNumber: 0000-0000-0000-000</Typography>
            <Typography>Birthdate: 2000/1/1</Typography>
          </>
        );
        break;
      default:
        detailsContent = <Typography>No details available.</Typography>;
    }
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {detailsContent}
      </Box>
    );
  };

  return (
    <>
      <Identity
        name={cardTitle}
        onDetailClick={handleDetailClick}
        onVerifyClick={handleVerifyClick}
      />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 270, // Set the width as needed
            height: 340,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            {cardTitle}
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {renderCardDetails(cardTitle)}
          </Typography>

          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
              }}
              variant="contained"
              startIcon={<CheckCircleOutlineIcon />}
              onClick={handleCloseModal}
            >
              Verify
            </Button>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Button
              sx={{
                color: "#2196f3",
                bgcolor: "white",
                borderColor: "#ff0000",
                textTransform: "none",
              }}
              variant="contained"
              //startIcon={<CheckCircleOutlineIcon />}
              onClick={handleCloseModal}
            >
              View as a raw JSON file
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Center the button horizontally
              mt: 2, // Margin top for spacing
            }}
          >
            <Button
              sx={{
                textTransform: "none",
              }}
              variant="outlined"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default IdentityCard;
