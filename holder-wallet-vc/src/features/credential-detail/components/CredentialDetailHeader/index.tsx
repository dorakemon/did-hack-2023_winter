import { DetailHeader } from '@/components/Headers';

type CredentialDetailHeaderProps = {
  title: string;
  verifyStatus?: 'valid' | 'invalid';
};

export const CredentialDetailHeader: React.FC<CredentialDetailHeaderProps> = ({
  title,
  verifyStatus,
}) => {
  return (
    <DetailHeader title={title} backLink="/home" verifyStatus={verifyStatus} />
  );
};
