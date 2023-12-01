import { Container, Flex, Box, Heading } from "@chakra-ui/react";
import React, { FC, useState } from "react";

import { GetQrCodeReader } from "..//components/GetQrCodeReader";
import { Footer } from "../components/Footer";
import QrCodeResult from "../components/QrCodeResult";

export const GetQrcode: FC = () => {
  const [qrCodes, setQrCodes] = useState<string[]>([]);

  return (
    <>
      <Container>
        <Flex flexDirection="column">
          <Box flex={1} height={"40vh"} mb={10}>
            <Heading size="lg">Get Credential</Heading>
            <QrCodeResult qrCodes={qrCodes} />
          </Box>
          <Box flex={1} height={"100vh"}>
            <GetQrCodeReader
              onReadQRCode={(text: string) => {
                setQrCodes((codes) => [text, ...codes]);
              }}
            />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};
