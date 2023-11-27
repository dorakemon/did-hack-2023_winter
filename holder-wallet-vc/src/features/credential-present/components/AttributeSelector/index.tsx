import { Card, Checkbox, Grid, Typography } from '@mui/joy';
import { useState } from 'react';

import { KeyValueList } from '@/domain';

type AttributeSelectorProps = {
  keyValueList: KeyValueList;
  onSelect: (keys: string[]) => void;
};

export const AttributeSelector: React.FC<AttributeSelectorProps> = ({
  keyValueList,
  onSelect,
}) => {
  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: boolean;
  }>(keyValueList.reduce((acc, cur) => ({ ...acc, [cur.key]: false }), {}));

  const attributeSelectorHandler = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    selectedAttributes[key] = e.target.checked;
    setSelectedAttributes(selectedAttributes);
    onSelect(
      Object.entries(selectedAttributes)
        .filter(([, value]) => value)
        .map(([key]) => key),
    );
  };

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
              <Checkbox
                label={keyValue.key}
                variant="outlined"
                onChange={(e) => attributeSelectorHandler(keyValue.key, e)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};
