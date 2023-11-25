import { useBackgroundProcess } from '../background';
import { QRCodeComponent } from '../components/QrCodeComponent';
import useSetUpWeb5 from '../hooks/useSetupWeb5';
import { useWeb5Store } from '../provider/Web5Provider';

const HomeView = () => {
  useBackgroundProcess();
  const { userDid, challenge } = useWeb5Store();
  return <QRCodeComponent jsonData={{ did: userDid, challenge: challenge }} />;
};

const Home = () => {
  const { isLoading, error } = useSetUpWeb5();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <HomeView />;
};

export default Home;
