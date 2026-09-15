import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>AGENTS MOBILE</Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">AGENTS LIST</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(AgentList);
