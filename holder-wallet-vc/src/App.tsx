import useSetUpWeb5 from "./hooks/useSetupWeb5";

import { MyDidView } from "./components/MyDidView";
import DingForm from "./components/DingFrom";
import useSubmitDing from "./hooks/useSubmitDing";
import { ToastContainer } from "react-toastify";
import DingReceiveViewer from "./components/DingReceiveViewer";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useReceiveDing } from "./hooks/useReceiveDing";

const App = () => {
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

export default App;
