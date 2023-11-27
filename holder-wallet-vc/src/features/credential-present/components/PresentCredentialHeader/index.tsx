import { DetailHeader } from '@/components/Headers';

type PresentCredentialHeaderProps = {
  title: string;
};

export const PresentCredentialHeader: React.FC<
  PresentCredentialHeaderProps
> = ({ title }) => {
  return <DetailHeader title={title} backLink="/detail" />;
};
