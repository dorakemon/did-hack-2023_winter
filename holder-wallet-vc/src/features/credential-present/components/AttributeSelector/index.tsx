import { Card, Checkbox, Grid, Typography } from '@mui/joy';

import { KeyValueList } from '@/domain';

type AttributeSelectorProps = {
  keyValueList: KeyValueList;
};

export const AttributeSelector: React.FC<AttributeSelectorProps> = ({
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
          Choose Attributes
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
              <Checkbox label={keyValue.key} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};
