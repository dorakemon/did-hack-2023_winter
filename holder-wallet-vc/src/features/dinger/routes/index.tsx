import { ToastContainer } from 'react-toastify';

import { useReceiveDing, useSetupWeb5, useSubmitDing } from '@/hooks/web5';

import DingForm from '../components/DingFrom';
import DingReceiveViewer from '../components/DingReceiveViewer';
import { MyDidView } from '../components/MyDidView';

export const Dinger = () => {
  const { web5, did, error, isLoading } = useSetupWeb5();
  const { handleSubmit } = useSubmitDing();
  const { dinged, dingedBy } = useReceiveDing();

  console.log(web5);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <MyDidView did={did ?? ''} />
      <DingForm onDingSubmit={handleSubmit} />
      <DingReceiveViewer dinged={dinged} dingedBy={dingedBy} />
      <ToastContainer autoClose={10000} />
    </>
  );
};
