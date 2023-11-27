import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Typography,
} from '@mui/joy';
import { JsonViewer } from '@textea/json-viewer';

import { ColorTheme } from '@/theme/color';

type JsonRawDataProps = {
  data: any;
};

export const JsonRawData: React.FC<JsonRawDataProps> = ({ data }) => {
  return (
    <AccordionGroup
      sx={{ bgcolor: ColorTheme.primarySoftBg, borderRadius: '8px' }}
    >
      <Accordion>
        <AccordionSummary color="primary">
          <Typography
            fontWeight={500}
            fontSize="14px"
            lineHeight="21px"
            sx={{ color: 'primary.soft' }}
          >
            Credential Data
          </Typography>
        </AccordionSummary>
        <AccordionDetails color="primary">
          <JsonViewer
            value={data}
            rootName={false}
            defaultInspectDepth={4}
            displayDataTypes={false}
            displaySize={false}
            sx={{ fontSize: '12px' }}
          />
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};
