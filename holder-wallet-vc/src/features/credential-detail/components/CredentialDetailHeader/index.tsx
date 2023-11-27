import { DetailHeader } from '@/components/Headers';

type CredentialDetailHeaderProps = {
  title: string;
};

export const CredentialDetailHeader: React.FC<CredentialDetailHeaderProps> = ({
  title,
}) => {
  return <DetailHeader title={title} backLink="/home" />;
};
