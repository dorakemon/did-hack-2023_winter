import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Button,
  Typography,
  FormGroup,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

function ComboBox({ onChange }: { onChange: (value: string) => void }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={CredentialList}
      sx={{ width: 320, display: "flex", justifyContent: "center" }}
      onChange={(_event, newValue) => {
        onChange(newValue?.label || "");
      }}
      renderInput={(params) => (
        <TextField {...params} label="Select Credential" />
      )}
    />
  );
}
const CredentialList = [{ label: "Student Card" }, { label: "MyNumber Card" }];

// Define the type for the attributes state
interface Attributes {
  Name: boolean;
  UniversityName: boolean;
  Laboratory: boolean;
  Birthday: boolean;
  MyNumber: boolean;
}

const ChooseCredential: React.FC = () => {
  const [selectedCredential, setSelectedCredential] = useState<string>("");
  const [attributes, setAttributes] = useState<Attributes>({
    Name: false,
    UniversityName: false,
    Laboratory: false,
    Birthday: false,
    MyNumber: false,
  });

  const handleCredentialChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedCredential(event.target.value as string);
  };

  const handleAttributeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAttributes({
      ...attributes,
      [event.target.name]: event.target.checked,
    });
  };

  const navigate = useNavigate();

  const handleCredentialSelect = (credential: string) => {
    setSelectedCredential(credential);
  };

  const navigateToSuccess = () => {
    navigate("/success", { state: { credential: selectedCredential } });
  };

  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        {" "}
        {/* Add some margin for spacing between sections */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Choose Credential
        </Typography>
        <FormControl fullWidth margin="normal">
          <ComboBox onChange={handleCredentialSelect} />
        </FormControl>
      </Box>

      <Card sx={{ marginBottom: 1, backgroundColor: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h6">Choose Attributes</Typography>
          <FormGroup>
            {Object.entries(attributes).map(([attr, checked]) => (
              <FormControlLabel
                key={attr}
                control={
                  <Switch
                    checked={checked}
                    onChange={handleAttributeChange}
                    name={attr}
                  />
                }
                label={attr}
                labelPlacement="start"
                sx={{ marginY: 1, justifyContent: "space-between" }}
              />
            ))}
          </FormGroup>
        </CardContent>
      </Card>
      <Card>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ textTransform: "none", fontSize: "18px" }}
          onClick={navigateToSuccess}
          disabled={!selectedCredential}
        >
          Present
        </Button>
      </Card>
    </>
  );
};

export default ChooseCredential;
