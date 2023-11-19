import React, { FC } from "react";
import { Fade, Table, Tbody, Td, Tr } from "@chakra-ui/react";

interface QrCodeResultProps {
  qrCodes: string[];
}

export const QrCodeResult: FC<QrCodeResultProps> = ({ qrCodes }) => {
  return (
    <Table>
      <Tbody>
        {qrCodes.map((qr, i) => (
          <Tr key={i}>
            <Td>
              <Fade in={true}>{qr}</Fade>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default QrCodeResult;
