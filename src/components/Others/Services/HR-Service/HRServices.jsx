import Compliance from "./Compliance";
import HRAudit from "./HRAudit";
import HRServiceBanner from "./HRServiceBanner";

const HRServices = () => {
  return (
    <div>
      <HRServiceBanner></HRServiceBanner>
      <HRAudit></HRAudit>
      <Compliance></Compliance>
    </div>
  );
};

export default HRServices;
