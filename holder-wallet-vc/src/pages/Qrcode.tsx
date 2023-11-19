import { FC, useState } from "react";
import {
  ChakraProvider,
  Container,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import QrCodeReader from "../components/QrCodeReader";
import QrCodeResult from "../components/QrCodeResult";
import { useLocation } from "react-router-dom";

const QrApp: FC = () => {
  const [qrCodes, setQrCodes] = useState<string[]>([]);
  const location = useLocation();
  const { actionType } = location.state || { actionType: "Get" }; // Default to "get"

  return (
    <Container>
      <Flex flexDirection="column">
        <Box flex={1} height={"40vh"} mb={10}>
          <Heading size="lg">
            {actionType === "Get" ? "Get Credential" : "Present Credential"}
          </Heading>
          <QrCodeResult qrCodes={qrCodes} />
        </Box>
        <Box flex={1} height={"100vh"}>
          <QrCodeReader
            onReadQRCode={(text) => {
              setQrCodes((codes) => [text, ...codes]);
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export const Qrcode: FC = () => {
  return (
    <ChakraProvider>
      <QrApp />
    </ChakraProvider>
  );
};

export default Qrcode;
