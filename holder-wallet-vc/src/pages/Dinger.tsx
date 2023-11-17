import { ToastContainer } from "react-toastify";

import DingForm from "../components/DingFrom";
import DingReceiveViewer from "../components/DingReceiveViewer";
import { MyDidView } from "../components/MyDidView";
import { useReceiveDing } from "../hooks/useReceiveDing";
import useSetUpWeb5 from "../hooks/useSetupWeb5";
import useSubmitDing from "../hooks/useSubmitDing";

export const Dinger = () => {
  const { web5, did, error, isLoading } = useSetUpWeb5();
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
      <MyDidView did={did ?? ""} />
      <DingForm onDingSubmit={handleSubmit} />
      <DingReceiveViewer dinged={dinged} dingedBy={dingedBy} />
      <ToastContainer autoClose={10000} />
    </>
  );
};
