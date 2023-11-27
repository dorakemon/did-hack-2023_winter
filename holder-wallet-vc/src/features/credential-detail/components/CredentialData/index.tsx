import { Card, Grid, Typography } from '@mui/joy';

import { KeyValueList } from '@/domain';

type CredentialDataProps = {
  keyValueList: KeyValueList;
};

export const CredentialData: React.FC<CredentialDataProps> = ({
  keyValueList,
}) => {
  return (
    <Card variant="soft" color="primary" sx={{ padding: '16px' }}>
      <Grid gap={2} direction={'column'} container>
        <Typography
          fontWeight={500}
          fontSize="14px"
          lineHeight="21px"
          sx={{ color: 'primary.soft' }}
        >
          Credential Data
        </Typography>
        <Grid gap={0.5} padding="0 4px" container>
          {keyValueList.map((keyValue, index) => (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              key={index}
              sx={{ width: '100%' }}
            >
              <Typography
                fontWeight={600}
                fontSize="14px"
                lineHeight="20px"
                sx={{ color: 'primary.soft' }}
              >
                {keyValue.key}
              </Typography>
              <Typography
                fontWeight={600}
                fontSize="14px"
                lineHeight="20px"
                sx={{ color: 'primary.soft' }}
              >
                {keyValue.value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};
